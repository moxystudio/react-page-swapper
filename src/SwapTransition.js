import { Component } from 'react';
import PropTypes from 'prop-types';
import shallowequal from 'shallowequal';
import { omit } from 'lodash';
import memoizeOne from 'memoize-one';
import once from 'once';

export default class SwapTransition extends Component {
    static propTypes = {
        node: PropTypes.element.isRequired,
        nodeKey: PropTypes.string.isRequired,
        prevNodeKey: PropTypes.string,
        mode: PropTypes.oneOf(['simultaneous', 'out-in']).isRequired,
        animation: PropTypes.string,
        in: PropTypes.bool,
        style: PropTypes.object,
        onEntered: PropTypes.func,
        onExited: PropTypes.func,
        children: PropTypes.func.isRequired,
    };

    static defaultProps = {
        in: false,
        style: {},
    };

    static getDerivedStateFromProps(props, state) {
        let transitioning;

        // Transitioning is set to true if the `in` prop changed
        // There's an exception which is when mounting, which we take into consideration the `hasPrevNode` prop
        if (props.in !== state.in) {
            transitioning = state.in == null ? !!props.prevNodeKey : true;
        } else {
            transitioning = state.transitioning;
        }

        return {
            // TransitionGroup adds the properties below, so we filter them out
            ...omit(props, ['appear', 'enter', 'exit', 'onExited']),
            // TransitionGroup changes `onExited` in every render unnecessarily,
            // so we keep it constant to avoid re-renders
            onExited: state.onExited || props.onExited,
            transitioning,
        };
    }

    state = {
        transitioning: false,
    };

    shouldComponentUpdate(prevProps, prevState) {
        // Only update when state changes, which was derived in `getDerivedStateFromProps`
        return !shallowequal(this.state, prevState);
    }

    render() {
        const { children, onEntered, onExited, ...rest } = this.state;

        return children({
            ...rest,
            onEntered: this.wrapOnEntered(onEntered),
            onExited: this.wrapOnExited(onExited),
        });
    }

    // eslint-disable-next-line react/sort-comp
    wrapOnEntered = memoizeOne((onEntered) => once(async () => {
        const { in: inProp, transitioning } = this.state;

        if (!inProp || !transitioning) {
            return;
        }

        await Promise.resolve();

        this.setState({ transitioning: false }, () => {
            onEntered?.();
        });
    }));

    // eslint-disable-next-line react/sort-comp
    wrapOnExited = memoizeOne((onExited) => once(async () => {
        const { in: inProp, transitioning } = this.state;

        if (inProp || !transitioning) {
            return;
        }

        await Promise.resolve();

        // `transitioning` is not changed to false as the view will be unmounted afterwards
        // This effectively avoids one useless re-render
        onExited?.();
    }));
}

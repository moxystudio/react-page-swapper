import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { pick } from 'lodash';
import shallowequal from 'shallowequal';

const PROP_NAMES = ['children', 'node', 'nodeKey', 'animation', 'transitioning', 'in', 'onEntered', 'onExited', 'children'];

export default class SwapTransition extends Component {
    static propTypes = {
        node: PropTypes.element.isRequired,
        nodeKey: PropTypes.string.isRequired,
        animation: PropTypes.string,
        transitioning: PropTypes.bool.isRequired,
        in: PropTypes.bool,
        onEntered: PropTypes.func.isRequired,
        onExited: PropTypes.func.isRequired,
        children: PropTypes.func.isRequired,
    };

    static defaultProps = {
        in: false,
    };

    static getDerivedStateFromProps(props, state) {
        let style;

        if (!props.in && state.props.in && state.myself) {
            const node = findDOMNode(state.myself);

            style = !node ? {} : {
                position: 'fixed',
                top: node.getBoundingClientRect().top,
                left: node.getBoundingClientRect().left,
                width: parseInt(getComputedStyle(node).width, 10),
                height: parseInt(getComputedStyle(node).height, 10),
                pointerEvents: 'none',
            };
        } else {
            style = {};
        }

        return {
            props: pick(props, PROP_NAMES),
            style,
        };
    }

    state = {
        props: {},
        myself: undefined,
        style: {},
    };

    componentDidMount() {
        this.setState({ myself: this });
    }

    shouldComponentUpdate(prevProps, prevState) {
        return !shallowequal(this.state.style, prevState.style) || !shallowequal(this.state.props, prevState.props);
    }

    render() {
        const { style, props } = this.state;
        const { children, ...rest } = props;

        return children({
            ...rest,
            style,
        });
    }
}

import React, { Component, createRef } from 'react';
import { findDOMNode } from 'react-dom';
import { TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import memoizeOne from 'memoize-one';
import SwapTransition from './SwapTransition';
import { getRandomNodeKey } from './node-key';
import { lockContainerSize, buildEnterStyle, buildExitStyle } from './layout';

export default class PageSwapper extends Component {
    static propTypes = {
        node: PropTypes.element.isRequired,
        nodeKey: PropTypes.string,
        mode: PropTypes.oneOfType([
            PropTypes.oneOf(['simultaneous', 'out-in']),
            PropTypes.func,
        ]),
        animation: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func,
        ]),
        children: PropTypes.func.isRequired,
        updateScroll: PropTypes.func,
        onSwapBegin: PropTypes.func,
        onSwapEnd: PropTypes.func,
    };

    static defaultProps = {
        mode: 'simultaneous',
        updateScroll: () => window.scrollTo(0, 0),
    };

    state = {};
    containerRef = createRef();
    ref = createRef();
    remainingSwapAcks = 0;
    raf;
    halfSwap;

    constructor(props) {
        super(props);

        this.state = this.buildState();
    }

    componentDidUpdate() {
        if (!this.isSwapping()) {
            if (this.isOutOfSync()) {
                this.beginSwap();
            } else {
                this.maybeUpdateNode();
            }
        }
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.raf);
    }

    render() {
        const { children } = this.props;
        const { node, nodeKey, prevNodeKey, in: inProp, mode, animation, style } = this.state;

        return (
            <TransitionGroup
                ref={ this.containerRef }
                { ...this.buildContainerProps(this.props) }>
                { nodeKey && (
                    <SwapTransition
                        key={ nodeKey }
                        in={ inProp }
                        node={ node }
                        nodeKey={ nodeKey }
                        prevNodeKey={ prevNodeKey }
                        mode={ mode }
                        animation={ animation }
                        style={ style }
                        ref={ this.handleRef }
                        onEntered={ this.handleEntered }
                        onExited={ this.handleExited }>
                        { children }
                    </SwapTransition>
                ) }
            </TransitionGroup>
        );
    }

    isSwapping() {
        return this.remainingSwapAcks > 0;
    }

    isOutOfSync() {
        const currentNodeKey = this.state.nodeKey;
        const nodeKey = this.props.nodeKey || getRandomNodeKey(this.props.node);

        return nodeKey !== currentNodeKey;
    }

    beginSwap() {
        const state = this.buildState();

        const { nodeKey, prevNodeKey } = state;
        const element = findDOMNode(this.ref.current);
        const containerElement = findDOMNode(this.containerRef.current);

        this.props.onSwapBegin?.({ nodeKey: prevNodeKey, nextNodeKey: nodeKey });

        this.remainingSwapAcks = 2;
        cancelAnimationFrame(this.raf);

        // Prepare exiting:
        // - Lock the container size
        // - Blur activeElement if any
        // - Apply the animation and out-of-flow styles
        const unlockSize = lockContainerSize(containerElement);

        document.activeElement?.blur();

        this.setState({
            animation: state.animation,
            style: buildExitStyle(element),
        }, () => {
            // Need to wait an animation frame so that the styles are applied
            // This is especially necessary for Safari, to avoid "flickering"
            this.raf = requestAnimationFrame(() => {
                if (state.mode === 'out-in') {
                    // Finally start the swap by making the current node exit.
                    this.setState({ node: null, nodeKey: null });

                    // Declare what to do after it exists, which will be used on the handleExited function
                    this.halfSwap = () => {
                        // Make the new node enter.
                        this.setState(state, () => {
                            // Now that we have the current node, its dimensions are being counted
                            // towards the document flow, meaning we can now update the scroll
                            // and unlock size
                            this.props.updateScroll({ nodeKey });
                            unlockSize();
                        });
                    };
                } else {
                    this.halfSwap = undefined;

                    // Finally start the swap!
                    this.setState(state, () => {
                        // Now that we have the current node, its dimensions are being counted
                        // towards the document flow, meaning we can now update the scroll
                        // and unlock size
                        this.props.updateScroll({ nodeKey });
                        unlockSize();
                    });
                }
            });
        });
    }

    finishSwap() {
        const { nodeKey, prevNodeKey } = this.state;

        this.props.onSwapEnd?.({ nodeKey, prevNodeKey });

        if (this.isOutOfSync()) {
            this.beginSwap();
        } else {
            this.maybeUpdateNode();
        }
    }

    maybeUpdateNode() {
        if (this.props.node !== this.state.node) {
            this.setState({ node: this.props.node });
        }
    }

    buildState() {
        const { node, mode, animation } = this.props;
        const { nodeKey: currentNodeKey } = this.state;

        const nodeKey = this.props.nodeKey ?? getRandomNodeKey(node);
        const modeStr = typeof mode === 'function' ?
            mode({ prevNodeKey: currentNodeKey, nodeKey }) :
            mode;
        const animationStr = typeof animation === 'function' ?
            animation({ prevNodeKey: currentNodeKey, nodeKey }) :
            animation;

        return {
            node,
            nodeKey,
            prevNodeKey: currentNodeKey,
            mode: modeStr,
            animation: animationStr,
            style: buildEnterStyle(),
        };
    }

    // eslint-disable-next-line react/sort-comp
    buildContainerProps = memoizeOne((props) => omit(props, [
        'node',
        'nodeKey',
        'mode',
        'animation',
        'children',
        'updateScroll',
        'onSwapBegin',
        'onSwapEnd',
    ]));

    handleRef = (ref) => {
        if (ref) {
            this.ref.current = ref;
        }
    };

    handleEntered = () => {
        this.remainingSwapAcks -= 1;

        if (!this.isSwapping()) {
            this.finishSwap();
        }
    };

    handleExited = () => {
        this.remainingSwapAcks -= 1;

        if (this.halfSwap) {
            this.halfSwap();
        } else {
            this.finishSwap();
        }
    };
}

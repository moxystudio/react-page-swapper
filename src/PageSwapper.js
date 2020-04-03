import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import once from 'once';
import SwapTransition from './SwapTransition';
import lockSize from './lock-size';
import { getRandomNodeKey } from './node-key';

export default class PageSwapper extends Component {
    static propTypes = {
        node: PropTypes.element.isRequired,
        nodeKey: PropTypes.string,
        animation: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        children: PropTypes.func.isRequired,
        onSwapBegin: PropTypes.func,
        onSwapEnd: PropTypes.func,
    };

    state = {};

    remainingSwapAcks = 0;
    unlockBodySize = undefined;

    constructor(props) {
        super(props);

        this.state = this.buildState();
    }

    componentDidUpdate() {
        if (this.isOutOfSync() && !this.isSwapping()) {
            this.beginSwap();
        }
    }

    componentWillUnmount() {
        this.unlockBodySize?.();
    }

    render() {
        const { children } = this.props;
        const { node, nodeKey, animation, transitioning, handleEntered, handleExited } = this.state;

        return (
            <TransitionGroup component={ null }>
                { nodeKey && (
                    <SwapTransition
                        key={ nodeKey }
                        node={ node }
                        nodeKey={ nodeKey }
                        animation={ animation }
                        transitioning={ transitioning }
                        onEntered={ handleEntered }
                        onExited={ handleExited }>
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

    buildState() {
        const { node, animation } = this.props;
        const { nodeKey: currentNodeKey } = this.state;

        const nodeKey = this.props.nodeKey ?? getRandomNodeKey(node);
        const animationStr = typeof animation === 'function' ? animation({ prevNodeKey: currentNodeKey, nodeKey }) : animation;

        return {
            node,
            nodeKey,
            prevNodeKey: currentNodeKey,
            animation: animationStr,
            transitioning: true,
            handleEntered: once(() => this.handleEntered(nodeKey)),
            handleExited: once(() => this.handleExited(nodeKey)),
        };
    }

    beginSwap() {
        const { onSwapBegin } = this.props;

        this.remainingSwapAcks = 2;
        this.unlockBodySize = lockSize(document.body);

        onSwapBegin?.();

        const newState = this.buildState();

        this.setState({
            animation: newState.animation,
        }, () => {
            this.setState(newState);
        });
    }

    finishSwap() {
        const { onSwapEnd } = this.props;

        this.unlockBodySize?.();
        onSwapEnd?.();

        if (this.isOutOfSync()) {
            this.beginSwap();
        }
    }

    handleEntered = (nodeKey) => {
        if (this.state.nodeKey !== nodeKey || !this.isSwapping()) {
            return;
        }

        this.remainingSwapAcks -= 1;

        this.setState({ transitioning: false }, () => {
            if (!this.isSwapping()) {
                this.finishSwap();
            }
        });
    };

    handleExited = (nodeKey) => {
        if (this.state.prevNodeKey !== nodeKey || !this.isSwapping()) {
            return;
        }

        this.remainingSwapAcks -= 1;

        if (!this.isSwapping()) {
            this.finishSwap();
        }
    };
}

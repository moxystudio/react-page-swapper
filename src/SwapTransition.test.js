import React from 'react';
import { render } from '@testing-library/react';
import SwapTransition from './SwapTransition';

const children = jest.fn(({ node }) => node);
const props = {
    node: <div>foo</div>,
    nodeKey: 'bar',
    animation: 'baz',
    style: { position: 'relative' },
    in: true,
    onEntered: jest.fn(() => {}),
    onExited: jest.fn(() => {}),
};

beforeEach(() => {
    jest.clearAllMocks();
});

it('should call children correctly', () => {
    const { getByText } = render(
        <SwapTransition { ...props }>
            { children }
        </SwapTransition>,
    );

    expect(getByText('foo')).toBeInTheDocument();
    expect(children).toHaveBeenCalledTimes(1);
    expect(children).toHaveBeenCalledWith({
        ...props,
        transitioning: false,
        onEntered: expect.any(Function),
        onExited: expect.any(Function),
    });
});

it('should set transitioning correctly when entering & exiting', async () => {
    render(
        <SwapTransition { ...props } in>
            { children }
        </SwapTransition>,
    );

    expect(children).toHaveBeenCalledTimes(1);
    expect(children.mock.calls[0][0].transitioning).toBe(false);

    children.mockClear();

    const { rerender } = render(
        <SwapTransition { ...props } in prevNodeKey="foo">
            { children }
        </SwapTransition>,
    );

    expect(children).toHaveBeenCalledTimes(1);
    expect(children.mock.calls[0][0].transitioning).toBe(true);

    // Calling `onEnter` should change `transitioning` to false
    const { onEntered } = children.mock.calls[0][0];

    children.mockClear();
    onEntered();

    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(children).toHaveBeenCalledTimes(1);
    expect(children.mock.calls[0][0].transitioning).toBe(false);

    children.mockClear();

    rerender(
        <SwapTransition { ...props } in={ false }>
            { children }
        </SwapTransition>,
    );

    expect(children).toHaveBeenCalledTimes(1);
    expect(children.mock.calls[0][0].transitioning).toBe(true);

    // Calling `onExit` should not change `transitioning` nor re-render
    const { onExited } = children.mock.calls[0][0];

    children.mockClear();
    onExited();

    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(children).toHaveBeenCalledTimes(0);
});

it('should not change transitioning if in is unchanged on re-render', () => {
    const { rerender } = render(
        <SwapTransition { ...props } in prevNodeKey="foo">
            { children }
        </SwapTransition>,
    );

    expect(children).toHaveBeenCalledTimes(1);
    expect(children.mock.calls[0][0].transitioning).toBe(true);

    children.mockClear();

    rerender(
        <SwapTransition { ...props } in prevNodeKey="foo">
            { children }
        </SwapTransition>,
    );

    expect(children).toHaveBeenCalledTimes(0);
});

it('should not re-render on TransitionGroup injected properties', () => {
    const { rerender } = render(
        <SwapTransition { ...props }>
            { children }
        </SwapTransition>,
    );

    rerender(
        <SwapTransition { ...props } appear="foo" enter="bar" exit="baz">
            { children }
        </SwapTransition>,
    );

    expect(children).toHaveBeenCalledTimes(1);
});

it('should not re-render when onExited changes, due to TransitionGroup changing it all the time', () => {
    const { rerender } = render(
        <SwapTransition { ...props }>
            { children }
        </SwapTransition>,
    );

    rerender(
        <SwapTransition { ...props } onExited={ () => {} }>
            { children }
        </SwapTransition>,
    );

    expect(children).toHaveBeenCalledTimes(1);
});

it('should call onEnter and onExit when transition finishes', async () => {
    const { rerender } = render(
        <SwapTransition { ...props } in prevNodeKey="foo">
            { children }
        </SwapTransition>,
    );

    expect(children).toHaveBeenCalledTimes(1);

    const { onEntered, onExited } = children.mock.calls[0][0];

    onEntered();

    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(props.onEntered).toHaveBeenCalledTimes(1);
    expect(props.onExited).toHaveBeenCalledTimes(0);

    props.onEntered.mockClear();
    props.onExited.mockClear();

    rerender(
        <SwapTransition { ...props } in={ false }>
            { children }
        </SwapTransition>,
    );

    onExited();

    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(props.onEntered).toHaveBeenCalledTimes(0);
    expect(props.onExited).toHaveBeenCalledTimes(1);
});

it('should prevent bad usage of onEnter and onExit', async () => {
    const { rerender } = render(
        <SwapTransition { ...props } in>
            { children }
        </SwapTransition>,
    );

    expect(children).toHaveBeenCalledTimes(1);

    const { onEntered, onExited } = children.mock.calls[0][0];

    children.mockClear();
    onEntered();
    onExited();

    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(children).toHaveBeenCalledTimes(0);
    expect(props.onEntered).toHaveBeenCalledTimes(0);
    expect(props.onExited).toHaveBeenCalledTimes(0);

    rerender(
        <SwapTransition { ...props } in={ false }>
            { children }
        </SwapTransition>,
    );

    children.mockClear();
    onEntered();

    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(children).toHaveBeenCalledTimes(0);
    expect(props.onEntered).toHaveBeenCalledTimes(0);
    expect(props.onExited).toHaveBeenCalledTimes(0);

    rerender(
        <SwapTransition { ...props } in>
            { children }
        </SwapTransition>,
    );

    children.mockClear();
    onExited();

    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(children).toHaveBeenCalledTimes(0);
    expect(props.onEntered).toHaveBeenCalledTimes(0);
    expect(props.onExited).toHaveBeenCalledTimes(0);
});

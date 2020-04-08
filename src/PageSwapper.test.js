import React from 'react';
import { render } from '@testing-library/react';
import PageSwapper from './PageSwapper';

const Page1 = () => <h1 tabIndex="1">Page 1</h1>;
const Page2 = () => <h1 tabIndex="1">Page 2</h1>;

beforeAll(() => {
    let counter = 0;

    // eslint-disable-next-line no-plusplus
    jest.spyOn(Math, 'random').mockImplementation(() => (++counter) * 0.00001);
});

beforeAll(() => {
    const style = document.createElement('style');

    style.type = 'text/css';
    style.innerHTML = `
        h1 {
            width: 200px;
            height: 300px;
        }

        .pageSwapper {
            width: 200px;
            height: 300px;
        }
    `;

    document.head.appendChild(style);

    jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
});

afterEach(() => {
    jest.clearAllMocks();
});

it('should work correctly on mount', () => {
    const children = jest.fn(({ node }) => node);

    const { getByText } = render(
        <PageSwapper
            node={ <Page1 /> }
            animation="fade">
            { children }
        </PageSwapper>,
    );

    expect(getByText('Page 1')).toBeInTheDocument();
    expect(children).toHaveBeenCalledTimes(1);
    expect(children).toHaveBeenCalledWith({
        node: <Page1 />,
        nodeKey: 'cre66i9s',
        animation: 'fade',
        style: { position: 'relative' },
        in: true,
        transitioning: false,
        onEntered: expect.any(Function),
        onExited: expect.any(Function),
    });
});

it('should swap when node changes', async () => {
    const children = jest.fn(({ in: inProp, node, onEntered, onExited }) => {
        if (inProp) {
            onEntered();
        } else {
            onExited();
        }

        return node;
    });

    const { rerender } = render(
        <PageSwapper
            node={ <Page1 /> }
            animation="fade">
            { children }
        </PageSwapper>,
    );

    children.mockClear();

    rerender(
        <PageSwapper
            node={ <Page2 /> }
            animation="slide">
            { children }
        </PageSwapper>,
    );

    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(children).toHaveBeenCalledTimes(4);

    expect(children).toHaveBeenNthCalledWith(1, {
        node: <Page1 />,
        nodeKey: 'cre66i9s',
        animation: 'slide',
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: 200,
            height: 300,
            pointerEvents: 'none',
        },
        in: true,
        transitioning: false,
        onEntered: expect.any(Function),
        onExited: expect.any(Function),
    });

    expect(children).toHaveBeenNthCalledWith(2, {
        node: <Page2 />,
        nodeKey: 'piscd0jk',
        animation: 'slide',
        style: {
            position: 'relative',
        },
        in: true,
        transitioning: true,
        onEntered: expect.any(Function),
        onExited: expect.any(Function),
    });

    expect(children).toHaveBeenNthCalledWith(3, {
        node: <Page1 />,
        nodeKey: 'cre66i9s',
        animation: 'slide',
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: 200,
            height: 300,
            pointerEvents: 'none',
        },
        in: false,
        transitioning: true,
        onEntered: expect.any(Function),
        onExited: expect.any(Function),
    });

    expect(children).toHaveBeenNthCalledWith(4, {
        node: <Page2 />,
        nodeKey: 'piscd0jk',
        animation: 'slide',
        style: {
            position: 'relative',
        },
        in: true,
        transitioning: false,
        onEntered: expect.any(Function),
        onExited: expect.any(Function),
    });
});

it('should wait for inflight swap before starting a new one', async () => {
    const children = jest.fn(({ in: inProp, node, onEntered, onExited }) => {
        if (inProp) {
            onEntered();
        } else {
            onExited();
        }

        return node;
    });

    const { rerender } = render(
        <PageSwapper
            node={ <Page1 /> }
            animation="fade">
            { children }
        </PageSwapper>,
    );

    children.mockClear();

    rerender(
        <PageSwapper
            node={ <Page2 /> }
            animation="fade">
            { children }
        </PageSwapper>,
    );

    rerender(
        <PageSwapper
            node={ <Page1 /> }
            animation="slide">
            { children }
        </PageSwapper>,
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(children).toHaveBeenCalledTimes(8);

    expect(children).toHaveBeenNthCalledWith(1, {
        node: <Page1 />,
        nodeKey: 'cre66i9s',
        animation: 'fade',
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: 200,
            height: 300,
            pointerEvents: 'none',
        },
        in: true,
        transitioning: false,
        onEntered: expect.any(Function),
        onExited: expect.any(Function),
    });

    expect(children).toHaveBeenNthCalledWith(2, {
        node: <Page2 />,
        nodeKey: 'piscd0jk',
        animation: 'fade',
        style: {
            position: 'relative',
        },
        in: true,
        transitioning: true,
        onEntered: expect.any(Function),
        onExited: expect.any(Function),
    });

    expect(children).toHaveBeenNthCalledWith(3, {
        node: <Page1 />,
        nodeKey: 'cre66i9s',
        animation: 'fade',
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: 200,
            height: 300,
            pointerEvents: 'none',
        },
        in: false,
        transitioning: true,
        onEntered: expect.any(Function),
        onExited: expect.any(Function),
    });

    expect(children).toHaveBeenNthCalledWith(4, {
        node: <Page2 />,
        nodeKey: 'piscd0jk',
        animation: 'fade',
        style: {
            position: 'relative',
        },
        in: true,
        transitioning: false,
        onEntered: expect.any(Function),
        onExited: expect.any(Function),
    });

    expect(children).toHaveBeenNthCalledWith(5, {
        node: <Page2 />,
        nodeKey: 'piscd0jk',
        animation: 'slide',
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: 200,
            height: 300,
            pointerEvents: 'none',
        },
        in: true,
        transitioning: false,
        onEntered: expect.any(Function),
        onExited: expect.any(Function),
    });

    expect(children).toHaveBeenNthCalledWith(6, {
        node: <Page1 />,
        nodeKey: 'cre66i9s',
        animation: 'slide',
        style: {
            position: 'relative',
        },
        in: true,
        transitioning: true,
        onEntered: expect.any(Function),
        onExited: expect.any(Function),
    });

    expect(children).toHaveBeenNthCalledWith(7, {
        node: <Page2 />,
        nodeKey: 'piscd0jk',
        animation: 'slide',
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: 200,
            height: 300,
            pointerEvents: 'none',
        },
        in: false,
        transitioning: true,
        onEntered: expect.any(Function),
        onExited: expect.any(Function),
    });

    expect(children).toHaveBeenNthCalledWith(8, {
        node: <Page1 />,
        nodeKey: 'cre66i9s',
        animation: 'slide',
        style: {
            position: 'relative',
        },
        in: true,
        transitioning: false,
        onEntered: expect.any(Function),
        onExited: expect.any(Function),
    });
});

it('should support a function as the animation prop', () => {
    const children = jest.fn(({ node }) => node);
    const animation = jest.fn(() => 'fade');

    const { rerender } = render(
        <PageSwapper
            node={ <Page1 /> }
            animation={ animation }>
            { children }
        </PageSwapper>,
    );

    rerender(
        <PageSwapper
            node={ <Page2 /> }
            animation={ animation }>
            { children }
        </PageSwapper>,
    );

    expect(animation).toHaveBeenCalledTimes(2);
    expect(animation).toHaveBeenNthCalledWith(1, { nodeKey: 'cre66i9s', prevNodeKey: undefined });
    expect(animation).toHaveBeenNthCalledWith(2, { nodeKey: 'piscd0jk', prevNodeKey: 'cre66i9s' });
});

it('should accept a custom nodeKey prop', () => {
    const children = jest.fn(({ node }) => node);

    render(
        <PageSwapper
            node={ <Page1 /> }
            nodeKey="foo">
            { children }
        </PageSwapper>,
    );

    expect(children).toHaveBeenCalledTimes(1);
    expect(children.mock.calls[0][0].nodeKey).toBe('foo');
});

it('should spread extraneous props into the container', () => {
    const { container } = render(
        <PageSwapper
            className="foo"
            style={ { overflow: 'hidden' } }
            node={ <Page1 /> }>
            { ({ node }) => node }
        </PageSwapper>,
    );

    const element = container.childNodes[0];

    expect(element).toHaveClass('foo');
    expect(element).toHaveStyle('overflow: hidden');
});

it('should lock / unlock container size when swapping', async () => {
    const children = ({ node }) => node;

    const { rerender, container } = render(
        <PageSwapper
            className="pageSwapper"
            node={ <Page1 /> }>
            { children }
        </PageSwapper>,
    );

    const element = container.childNodes[0];

    expect(element.style.minWidth).toBe('');
    expect(element.style.minHeight).toBe('');

    rerender(
        <PageSwapper
            className="pageSwapper"
            node={ <Page2 /> }>
            { children }
        </PageSwapper>,
    );

    expect(element.style.minWidth).toBe('200px');
    expect(element.style.minHeight).toBe('300px');

    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(element.style.minWidth).toBe('');
    expect(element.style.minHeight).toBe('');
});

it('should blur active element when swapping', async () => {
    const children = ({ node }) => node;

    const { rerender, getByText } = render(
        <PageSwapper
            className="pageSwapper"
            node={ <Page1 /> }>
            { children }
        </PageSwapper>,
    );

    const element = getByText('Page 1');

    element.focus();

    jest.spyOn(element, 'blur');

    rerender(
        <PageSwapper
            className="pageSwapper"
            node={ <Page2 /> }>
            { children }
        </PageSwapper>,
    );

    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(element.blur).toHaveBeenCalledTimes(1);
});

it('should update scroll position', async () => {
    const updateScroll = jest.fn();
    const children = ({ node }) => node;

    const { rerender } = render(
        <PageSwapper
            node={ <Page1 /> }
            updateScroll={ updateScroll }>
            { children }
        </PageSwapper>,
    );

    expect(updateScroll).toHaveBeenCalledTimes(0);

    rerender(
        <PageSwapper
            node={ <Page2 /> }
            updateScroll={ updateScroll }>
            { children }
        </PageSwapper>,
    );

    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(updateScroll).toHaveBeenCalledTimes(1);
    expect(updateScroll).toHaveBeenCalledWith({ nodeKey: 'piscd0jk' });
});

it('should call onSwapBegin and onSwapEnd props correctly', async () => {
    const onSwapBegin = jest.fn();
    const onSwapEnd = jest.fn();
    const children = ({ in: inProp, node, onEntered, onExited }) => {
        if (inProp) {
            onEntered();
        } else {
            onExited();
        }

        return node;
    };

    const { rerender } = render(
        <PageSwapper
            node={ <Page1 /> }
            onSwapBegin={ onSwapBegin }
            onSwapEnd={ onSwapEnd }>
            { children }
        </PageSwapper>,
    );

    expect(onSwapBegin).toHaveBeenCalledTimes(0);
    expect(onSwapEnd).toHaveBeenCalledTimes(0);

    rerender(
        <PageSwapper
            node={ <Page2 /> }
            onSwapBegin={ onSwapBegin }
            onSwapEnd={ onSwapEnd }>
            { children }
        </PageSwapper>,
    );

    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(onSwapBegin).toHaveBeenCalledTimes(1);
    expect(onSwapBegin).toHaveBeenCalledWith({ nodeKey: 'cre66i9s', nextNodeKey: 'piscd0jk' });
    expect(onSwapEnd).toHaveBeenCalledTimes(1);
    expect(onSwapEnd).toHaveBeenCalledWith({ nodeKey: 'piscd0jk', prevNodeKey: 'cre66i9s' });
});

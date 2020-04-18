# react-page-swapper

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][build-status-image]][build-status-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/react-page-swapper
[downloads-image]:https://img.shields.io/npm/dm/@moxy/react-page-swapper.svg
[npm-image]:https://img.shields.io/npm/v/@moxy/react-page-swapper.svg
[build-status-url]:https://github.com/moxystudio/react-page-swapper/actions
[build-status-image]:https://img.shields.io/github/workflow/status/moxystudio/react-page-swapper/Node%20CI/master
[codecov-url]:https://codecov.io/gh/moxystudio/react-page-swapper
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/react-page-swapper/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/react-page-swapper
[david-dm-image]:https://img.shields.io/david/moxystudio/react-page-swapper.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/react-page-swapper?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/react-page-swapper.svg

An orchestrator that eases out the implementation of page transitions.

## Installation

```sh
$ npm install @moxy/react-page-swapper
```

This library is written in modern JavaScript and is published in both CommonJS and ES module transpiled variants. If you target older browsers please make sure to transpile accordingly.

## Motivation

Adding page transitions to your website might look easy at first glance. There are a plethora of articles on the web that suggest using libraries such as `<TransitionGroup>` from [React Transition Group](https://reactcommunity.org/react-transition-group/) or `<AnimatePresence>` from [Framer's Motion](https://www.framer.com/api/motion/), to add page transitions to your website.

However, they are generic solutions and, as a result, they miss important steps for page transitions. Amongst others, one of the most important steps they miss out is the scroll position. You want your page transitions to work nicely regardless of the scroll being at the top or at the bottom.

So, what makes a good page transition library? Here's the fundamental steps to take while swapping pages:

1. Remove the current page from the normal flow of the document, while keeping it exactly in same position and with the same dimensions. This usually involves making it `position: fixed` and set `top`, `left`, `width` and `height` CSS properties correctly.
2. Lock the container dimensions by setting `min-width` and `min-height` accordingly. This is needed to maintain the container dimensions since the current page is out of the flow, meaning it will no longer grow its parent.
3. Render the new page, making it part of the normal flow of the document.
4. Update the scroll position and unlock the container dimensions that were previously set in step `2.`. Updating the scroll position usually means doing `window.scrollTo(0, 0)` on a new navigation (coming from `history.pushState`) or restoring the scroll position on a `popstate`.
4. Play the animations, orchestrating the exit and enter transitions of the current and new page respectively.
5. Unmount the current page from the DOM once both animations finish. The new page has now become the current page.

`@moxy/react-page-swapper` offers a `<PageSwapper>` component that performs all the steps mentioned above, effectively orchestrating the swapping of pages. Note, however, that it doesn't actually animate your pages and instead lets you use your favorite animation library, given you respect the established API.

## Demo

You may see a simple demo of `@moxy/react-page-swapper` at [https://moxystudio.github.io/react-page-swapper](https://moxystudio.github.io/react-page-swapper/).

## Usage

Here's a quick example of how you would use it in a [Next.js](https://nextjs.org/) app along with `<CSSTransition>` from [React Transition Group](https://reactcommunity.org/react-transition-group/):

```js
// pages/_app.js
import React from 'react';
import PageSwapper from '@moxy/react-page-swapper';
import { CSSTransition } from 'react-transition-group';
import styles from './_app.module.css';

if (typeof history !== 'undefined') {
    history.scrollRestoration = 'manual';
}

const App = ({ Component, pageProps }) => (
    <PageSwapper
        node={ <Component { ...pageProps } /> }
        animation="fade">
        { ({ animation, style, in: inProp, onEntered, onExited }) => (
            <CSSTransition
                className={ styles[animation] }
                style={ style }
                in={ inProp }
                onEntered={ onEntered }
                onExited={ onExited }>
                <div>{ node }</div>
            </CSSTransition>
        ) }
    </PageSwapper>
);

export default App;
```

```css
/* pages/_app.module.css */
.fade {
    transition: opacity 0.6s;

    &.enter {
        opacity: 0;
    }

    &.enterActive,
    &.enterDone {
        opacity: 1;
    }
}
```

## Caveats

<details>
  <summary>Prevent overflow in the container element</summary>

  If you have horizontal / vertical animations, make sure to prevent elements from overflowing the container. Here's an example to disable horizontal overflow:

  ```js
  <PageSwapper
    /* other props */
    style={ { width: '100%', overflowX: 'hidden' } }>
    { () => (/* */) }
  </PageSwapper>
  ```

  Alternatively, you may pass a `className` that has the same CSS declarations.
</details>

<details>
  <summary>Focus handling</summary>

  The current focused element will be automatically blurred to to prevent animations from glitching. However, it's a good accessibility practice to focus the primary element within the new page.

  To focus elements after a swap is completed, you have two options:

  1. Use the `onSwapEnd` prop:

  ```js
  const handleSwapEnd = useMemo(() => {
      document.querySelector('[data-focusable-page-element]')?.focus();
  }, []);

  <PageSwapper
    /* other props */
    onSwapEnd={ handleSwapEnd }>
    { () => (/* */) }
  </PageSwapper>
  ```

  ...and then add the `[data-focusable-page-element]` and `tabIndex="-1"` (if needed) attributes to the element, of each page, that should be immediately focused.

  2. Use the `transitioning` property of the children render prop:

  ```js
  <PageSwapper
    /* other props */>
    { ({ style, in: inProp, transitioning, onEntered, onExited }) => (
        <CSSTransition
            style={ style }
            in={ inProp }
            onEntered={ onEntered }
            onExited={ onExited }>
            <div>
                /* This is the secret sauce */
                { cloneElement(node, { focus: inProp && !transitioning }) }
            </div>
        </CSSTransition>
    ) }
  </PageSwapper>
  ```

  ...and then handle the `focus` property within your pages' components:

  ```js
  const MyPage = ({ focus }) => {
      const focusableRef = useRef();

      useEffect(() => {
          if (focus) {
              focusableRef.current?.focus();
          }
      }, [focus]);

      return (
          <div>
            <h1 tabIndex="-1" ref={ focusableRef }>Page title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
      );
  };
  ```
</details>

<details>
  <summary>Glitchy animations</summary>

  As a rule of thumb, use CSS properties that only require composite, such as `opacity` and `transform`. Properties such as `top` and `left` require layout which are often less performant, thus you should avoid them. You may use [CSS Triggers](https://csstriggers.com/) to check which CSS properties cause layout, paint and composite.

  If you are still experiencing glitchy animations, read the list below for possible solutions:

  1. Stuttering animations in Firefox

  Try adding `backface-visibility: hidden` to the element. If that doesn't work, try adding `transform-style: preserve-3d` or `transform: translateZ(0)` instead.

  2. Flicker in iOS Safari

  Sometimes, the current page flickers right before the out animation. This is a known iOS Safari issue when `transform` is used in combination with `position: fixed`.

  First, try promoting the layer to the GPU with the usual `transform: translateZ(0)` "hacks". If these don't work, then changing `transform` to `left` and `top` (or similar) will most likely fix the problem. Since the flicker is caused by the browser delaying the composite calculations, using CSS properties that cause layout will force them to be applied earlier.

  To apply this trade-off only for iOS Safari, you may perform device detection with JavaScript or use the `@supports` like so:

  ```css
  @supports not (-webkit-touch-callout: none) {
      /* Target all browsers except iOS Safari */
  }

  @supports (-webkit-touch-callout: none) {
      /* Target only iOS Safari */
  }
  ```

  > ⚠️ If you are indeed using `top` and `left`, they will conflict with the `style` property from the render prop function. One way to circumvent  this is to create a wrapper and apply the `style` property to that element instead.

  > ⚠️ The `@supports` CSS rule is not supported in Internet Explorer.
</details>

## API

### &lt;PageSwapper&gt;

`<PageSwapper>` is the default export and is a component that orchestrates the swapping of pages.

ℹ️ Besides the props described below, any other props will be spread into the container element, allowing you to specify DOM props such as `className`.

#### node

Type: `ReactElement`

In simple scenarios, this is the page's react element.

In advanced scenarios, such as nested routes, `node` is a node from a react tree. Usually, leaf nodes are the actual page element and non-leaf nodes are layout elements.

#### nodeKey

Type: `string` (*required*)   
Default: *random but deterministic*

A unique key that identifies the `node`. If omitted, a random key node will be generated based on the node's component type. In advanced scenarios, you may specify a key such as one based on the route path or `location.pathname`. You may take a look at [`getNodeKeyFromPathname()`](#getnodekeyfrompathnamelevel-pathname) to see if it's useful for your use-case.

#### animation

Type: `string` or `Function`

The animation to use when transitioning the current node out and the new one in. It may be a fixed string or a function to determine it, with the following signature:

```js
({ nodeKey, prevNodeKey }) => animation;
```

The function form allows you to select the animation based on the current and previous node keys, making it possible to choose different animations depending on the context.

#### children

Type: `Function` (*required*)

A render prop that is called for exiting and entering nodes, with the correct context. It has the following signature:

```js
({ node, nodeKey, animation, style, transitioning, in, onEntered, onExiting }) => ReactElement;
```

| Property | Type | Description |
| --- | ---- | ----------- |
| `node` | `ReactElement` | The node to render. |
| `nodeKey` | `string` | The key associated to the node. |
| `animation` | `string` | The animation to apply for the transition. |
| `style` | `Object` | An object with CSS styles to be applied to the element being transitioned. |
| `transitioning` | `boolean` | True if the node is transitioning, false otherwise. See note below. |
| `in` | `boolean` | True to show the node, false otherwise. |
| `onEntered` | `Function` | Function to be called when the node finishes transitioning in. |
| `onExited` | `Function` | Function to be called when the node finishes transitioning out. |

If you are familiar with `<Transition>` and `<CSSTransition>` components from [React Transition Group](https://reactcommunity.org/react-transition-group/), the `in`, `onEntered` and `onExited` should be familiar to you.

The `style` property contains inline styles, namely `position: fixed` with `top`, `left`, `width` and `height` for pages that are exiting. Be sure to apply these to the element being transitioned.

The `transitioning` property makes it possible to know if the `node` has finished transitioning or not, which is useful to disable behavior while the animation is playing, like ignoring scroll events or [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) callbacks.

#### updateScroll

Type: `Function`   
Default: `({ nodeKey }) => window.scrollTo(0, 0)`

A function called to update the scroll position during a swap. Usually, you do `window.scrollTo(0, 0)` on a new navigation (coming from `history.pushState`) or restore the scroll position on a `popstate`.

We recommend using [`scroll-behavior`](https://github.com/taion/scroll-behavior/) to integrate with the Router you are using, and pass `() => scrollBehavior.updateScroll()` as the `updateScroll` property.

#### onSwapBegin

Type: `Function`   

A callback called whenever a swap begins, with the following parameters:

```js
({ nodeKey, nextNodeKey }) => {}
```

#### onSwapEnd

Type: `Function`   

A callback called whenever a swap ends, with the following parameters:

```js
({ nodeKey, prevNodeKey }) => {}
```

### getNodeKeyFromPathname(level, [pathname])

A utility that returns a slice of `location.pathname`. Useful if you want to have fine grained control over `nodeKey`.

```js
import { getNodeKeyFromPathname } from '@moxy/react-page-swapper';

// Given `location.pathname` equal to `/foo/bar/baz`:

getNodeKeyFromPathname(0) // /foo
getNodeKeyFromPathname(1) // /foo/bar
getNodeKeyFromPathname(2) // /foo/bar/baz
```

You may specify a custom `pathname`, like a route path:

```js
import { getNodeKeyFromPathname } from '@moxy/react-page-swapper';

getNodeKeyFromPathname(0, '/blog/[id]') // /blog
getNodeKeyFromPathname(1, '/blog/[id]') // /blog/[id]
```

### isHistoryEntryFromPopState()

A utility to know if the current history entry originated from a `popstate` event or not. Useful to disable animations if the user is using the browser's back and forward functionality.

```js
// pages/_app.js
import { isHistoryEntryFromPopState } from '@moxy/react-page-swapper';

const animation = isHistoryEntryFromPopState() ? 'none' : 'fade';

// and then code the 'none' animation to be a dummy one that finishes instantly
```

## Tests

```sh
$ npm test
$ npm test -- --watch # during development
```

## License

Released under the [MIT License](https://www.opensource.org/licenses/mit-license.php).

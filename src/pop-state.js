import { wrap } from 'lodash';

let popState = false;

if (typeof window !== 'undefined') {
    window.addEventListener('popstate', () => {
        popState = true;
    });

    history.pushState = wrap(history.pushState, (pushState, ...args) => {
        popState = false;
        pushState.apply(history, args);
    });
}

const isPopState = () => popState;

export default isPopState;

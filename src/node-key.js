const nodeKeySymbol = Symbol();

export const getRandomNodeKey = (node) => {
    if (process.env.NODE_ENV !== 'production' && typeof node?.type !== 'function') {
        throw new TypeError('Node type must be a component. Are you passing a DOM node such as <div />?');
    }

    let nodeKey = node.type[nodeKeySymbol];

    if (!nodeKey) {
        nodeKey = Math.floor(Math.random() * (10 ** 17)).toString(36);

        Object.defineProperty(node.type, nodeKeySymbol, { value: nodeKey });
    }

    return nodeKey;
};

export const getNodeKeyFromPathname = (level, pathname) => {
    if (!pathname) {
        pathname = typeof location !== 'undefined' ? location.pathname : '/';
    }

    return pathname.split('/').slice(0, level + 2).join('/');
};

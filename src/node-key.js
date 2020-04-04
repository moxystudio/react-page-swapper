const nodeKeySymbol = Symbol();

export const getRandomNodeKey = (node) => {
    if (!node.type[nodeKeySymbol]) {
        Object.defineProperty(node.type, nodeKeySymbol, {
            value: Math
                .random()
                .toString(36)
                .substr(2, 8),
        });
    }

    return node.type[nodeKeySymbol];
};

export const getNodeKeyFromPathname = (level, pathname) => {
    if (!pathname) {
        pathname = typeof location !== 'undefined' ? location.pathname : '/';
    }

    return pathname.split('/').slice(0, level + 2).join('/');
};

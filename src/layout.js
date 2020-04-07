export const lockContainerSize = (element) => {
    const { width, height } = getComputedStyle(element);

    element.style.minWidth = width;
    element.style.minHeight = height;

    return () => {
        element.style.minWidth = '';
        element.style.minHeight = '';
    };
};

export const buildEnterStyle = () => ({
    position: 'relative',
});

export const buildExitStyle = (element) => {
    if (!element) {
        return {};
    }

    const { width, height } = getComputedStyle(element);
    const { top, left } = element.getBoundingClientRect();

    return {
        position: 'fixed',
        top,
        left,
        width: parseInt(width, 10),
        height: parseInt(height, 10),
        pointerEvents: 'none',
    };
};

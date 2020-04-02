const lockSize = (element) => {
    const boundingRect = getComputedStyle(element);

    element.style.height = boundingRect.height;
    element.style.width = boundingRect.width;

    return () => {
        element.style.width = '';
        element.style.height = '';
    };
};

export default lockSize;

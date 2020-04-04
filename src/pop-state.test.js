import isPopState from './pop-state';

it('should return false in the beginning', () => {
    expect(isPopState()).toBe(false);
});

it('should return true if history entry originated from a popstate', () => {
    window.dispatchEvent(new Event('popstate'));

    expect(isPopState()).toBe(true);
});

it('should return false after a pushState', () => {
    window.dispatchEvent(new Event('popstate'));

    history.pushState({}, '', '/foo');

    expect(isPopState()).toBe(false);
});

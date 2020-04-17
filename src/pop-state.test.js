import isHistoryEntryFromPopState from './pop-state';

afterEach(() => {
    jest.restoreAllMocks();
});

it('should return false in the beginning', () => {
    expect(isHistoryEntryFromPopState()).toBe(false);
});

it('should return true if history entry originated from a popstate', () => {
    window.dispatchEvent(new Event('popstate'));

    expect(isHistoryEntryFromPopState()).toBe(true);
});

it('should return false after a pushState', () => {
    window.dispatchEvent(new Event('popstate'));

    history.pushState({}, '', '/foo');

    expect(isHistoryEntryFromPopState()).toBe(false);
});

it('should return false on SSR', () => {
    jest.spyOn(global, 'window', 'get').mockImplementation(() => undefined);
    jest.resetModules();

    const isHistoryEntryFromPopState = require('./pop-state');

    expect(isHistoryEntryFromPopState()).toBe(false);
});

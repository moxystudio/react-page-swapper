import * as exports from './index';

it('should export <PageSwapper> by default', () => {
    expect(typeof exports.default).toBe('function');
});

it('should export isHistoryEntryFromPopState', () => {
    expect(typeof exports.isHistoryEntryFromPopState).toBe('function');
});

it('should export getNodeKeyFromPathname', () => {
    expect(typeof exports.getNodeKeyFromPathname).toBe('function');
});

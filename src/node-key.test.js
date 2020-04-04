import React from 'react';
import { getRandomNodeKey, getNodeKeyFromPathname } from './node-key';

describe('getRandomNodeKey()', () => {
    beforeEach(() => {
        let counter = 0;

        jest.spyOn(Math, 'random').mockImplementation(() => {
            counter += 1;

            return counter * 0.001;
        });
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should return a random key for a given node', () => {
        const MyComponent = () => {};
        const MyOtherComponent = () => {};

        expect(getRandomNodeKey(<MyComponent />)).toBe('01anm6c3');
        expect(getRandomNodeKey(<MyOtherComponent />)).toBe('02lb8co6');
    });

    it('should return the same key for the same node', () => {
        const MyComponent = () => {};

        expect(getRandomNodeKey(<MyComponent />)).toBe('01anm6c3');
        expect(getRandomNodeKey(<MyComponent foo="bar" />)).toBe('01anm6c3');
    });
});

describe('getNodeKeyFromPathname()', () => {
    it('should return the correct key according to the level', () => {
        expect(getNodeKeyFromPathname(0, '/foo/bar/baz')).toBe('/foo');
        expect(getNodeKeyFromPathname(1, '/foo/bar/baz')).toBe('/foo/bar');
        expect(getNodeKeyFromPathname(2, '/foo/bar/baz')).toBe('/foo/bar/baz');
        expect(getNodeKeyFromPathname(3, '/foo/bar/baz')).toBe('/foo/bar/baz');
    });

    it('should assume location.pathname by default', () => {
        window.history.replaceState({}, '', '/foo/bar');

        expect(getNodeKeyFromPathname(0)).toBe('/foo');
        expect(getNodeKeyFromPathname(1)).toBe('/foo/bar');
    });

    it('should work well in SSR', () => {
        const location = window.location;

        delete window.location;

        try {
            expect(getNodeKeyFromPathname(0)).toBe('/');
            expect(getNodeKeyFromPathname(1)).toBe('/');
        } finally {
            window.location = location;
        }
    });
});

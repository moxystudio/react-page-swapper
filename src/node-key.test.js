import React, { forwardRef, memo } from 'react';
import { getRandomNodeKey, getNodeKeyFromPathname } from './node-key';

describe('getRandomNodeKey()', () => {
    beforeEach(() => {
        let counter = 0;

        // eslint-disable-next-line no-plusplus
        jest.spyOn(Math, 'random').mockImplementation(() => (++counter) * 0.00001);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should return the same random key for a given node', () => {
        const MyComponent = () => {};
        const MyOtherComponent = () => {};
        const ForwardedMyComponent = forwardRef(() => <MyComponent />);
        const MemoMyComponent = memo(MyComponent);

        expect(getRandomNodeKey(<MyComponent />)).toBe('cre66i9s');
        expect(getRandomNodeKey(<MyComponent foo="bar" />)).toBe('cre66i9s');
        expect(getRandomNodeKey(<MyOtherComponent />)).toBe('piscd0jk');
        expect(getRandomNodeKey(<MyOtherComponent foo="bar" />)).toBe('piscd0jk');
        expect(getRandomNodeKey(<ForwardedMyComponent />)).toBe('12a6ijitc');
        expect(getRandomNodeKey(<ForwardedMyComponent foo="bar" />)).toBe('12a6ijitc');
        expect(getRandomNodeKey(<MemoMyComponent />)).toBe('1f1koq134');
        expect(getRandomNodeKey(<MemoMyComponent foo="bar" />)).toBe('1f1koq134');
    });

    it('should throw if node type is not a component', () => {
        expect(() => {
            getRandomNodeKey('foo');
        }).toThrow(TypeError, /node type must be a component/i);

        expect(() => {
            getRandomNodeKey(<div />);
        }).toThrow(TypeError, /node type must be a component/i);

        expect(() => {
            getRandomNodeKey(<>foo</>);
        }).toThrow(TypeError, /node type must be a component/i);
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

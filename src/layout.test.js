import { lockContainerSize, buildEnterStyle, buildExitStyle } from './layout';

let fooDiv;

beforeAll(() => {
    const style = document.createElement('style');

    style.type = 'text/css';
    style.innerHTML = `
        #foo {
            width: 200px;
            height: 300px;
        }
    `;

    document.head.appendChild(style);
});

beforeEach(() => {
    fooDiv = document.createElement('div');

    fooDiv.setAttribute('id', 'foo');
    fooDiv.innerText = 'foo';

    document.body.appendChild(fooDiv);
});

afterEach(() => {
    document.body.removeChild(fooDiv);
});

describe('lockContainerSize', () => {
    it('should lock a element size', () => {
        lockContainerSize(fooDiv);

        expect(fooDiv.style.minWidth).toBe('200px');
        expect(fooDiv.style.minHeight).toBe('300px');
    });

    it('should return a function to reset locking', () => {
        const reset = lockContainerSize(fooDiv);

        reset();

        expect(fooDiv.style.minWidth).toBe('');
        expect(fooDiv.style.minHeight).toBe('');
    });
});

describe('buildEnterStyle', () => {
    it('should return the correct style object', () => {
        expect(buildEnterStyle()).toEqual({
            position: 'relative',
        });
    });
});

describe('buildExitStyle', () => {
    it('should return the correct style object', () => {
        jest.spyOn(fooDiv, 'getBoundingClientRect').mockImplementation(() => ({
            width: 1000, // Should not be used
            height: 1000, // Should not be used
            top: 100,
            left: 150,
            x: 150,
            y: 100,
            right: 200,
            bottom: 250,
        }));

        expect(buildExitStyle(fooDiv)).toEqual({
            position: 'fixed',
            top: 100,
            left: 150,
            width: 200,
            height: 300,
            pointerEvents: 'none',
        });
    });

    it('should return an empty style object if element is undefined', () => {
        expect(buildExitStyle()).toEqual({});
    });
});

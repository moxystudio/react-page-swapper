import lockSize from './lock-size';

beforeAll(() => {
    const div = document.createElement('div');

    div.setAttribute('id', 'foo');
    div.innerText = 'foo';

    const style = document.createElement('style');

    style.type = 'text/css';
    style.innerHTML = `
        #foo {
            width: 200px;
            height: 300px;
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(div);
});

it('should lock a element size', () => {
    const foo = document.getElementById('foo');

    lockSize(foo);

    expect(foo.style.width).toBe('200px');
    expect(foo.style.height).toBe('300px');
});

it('should return a function to reset locking', () => {
    const foo = document.getElementById('foo');

    const reset = lockSize(foo);

    reset();

    expect(foo.style.width).toBe('');
    expect(foo.style.height).toBe('');
});

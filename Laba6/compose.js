'use strict';

const compose = (...fns) => {
    let handlers = [];

    const composed = (x) => {
        let result = x;
        try {
            for (let i = fns.length - 1; i >= 0; i--) {
                result = fns[i](result);
            }
            return result;
        } catch (error) {
            for (const handler of handlers) {
                handler(error);
            }
            return undefined;
        }
    };

    composed.on = (name, handler) => {
        if (name === 'error') {
            handlers.push(handler);
        }
    };

    return composed;
};

const inc = (x) => {
    if (typeof x !== 'number') throw new Error('Argument must be a number!');
    return x + 1;
};
const twice = (x) => {
    if (typeof x !== 'number') throw new Error('Argument must be a number!');
    return x * 2;
};
const cube = (x) => {
    if (typeof x !== 'number') throw new Error('Argument must be a number!');
    return x ** 3;
};

const throwError = (x) => {
    if (typeof x !== 'number') throw new Error('Input must be a number!');
    return x;
};

const composed = compose(throwError, inc, twice, cube);

composed.on('error', (error) => {
    console.error('Caught an error:', error.message);
});

console.log(composed(2)); // Результат: 17
console.log(composed('two')); // Результат: undefined && error


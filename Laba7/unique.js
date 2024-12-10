'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
    const result = [];
    for (const item of array) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    return result;
};

//const result = unique([2, 1, 1, 3, 2]);
//console.log(result);
// Result: [2, 1, 3]

const result = unique(['top', 'bottom', 'top', 'left']);
console.log(result);
// Result: ['top', 'bottom', 'left']

module.exports = { unique };

'use strict';

const removeElement = (array, item) => {
    const index = array.indexOf(item);
    array.splice(index, 1);
};


const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);

// Result: [1, 2, 3, 4, 6, 7]

module.exports = { removeElement };

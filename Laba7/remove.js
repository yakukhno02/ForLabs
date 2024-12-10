'use strict';

const removeElement = (array, item) => {
    const index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
};


//const array = [1, 2, 3, 4, 5, 6, 7];
//removeElement(array, 5);
//console.log(array);

// Result: [1, 2, 3, 4, 6, 7]

const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array, 'Lima'); // remove 'Lima' from array
removeElement(array, 'Berlin'); // do nothing
console.log(array);
// Result: ['Kiev', 'Beijing', 'Saratov']

module.exports = { removeElement };

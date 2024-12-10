'use strict';

const removeElements = (array, ...items) => {
    for (const item of items){
        const element = array.indexOf(item);
        if (element !== -1){
            array.splice(element, 1);
        }
    }
};

//const array = [1, 2, 3, 4, 5, 6, 7];
//removeElements(array, 5, 1, 6);
//console.log(array);
// Result: [2, 3, 4, 7]

const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array, 'Lima', 'Berlin', 'Kiev');
console.log(array);
// Result: ['Beijing', 'Saratov']

module.exports = { removeElements };

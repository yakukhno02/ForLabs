'use strict';
function array(){
    const Array = [];

    const place = (index) =>{
        return Array[index];
    };

    place.push = (value) => {
        return Array.push(value);
    };

    place.pop = () => {
       return  Array.pop();
    };
    return place;

}
const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Виводить: first
console.log(arr(1)); // Виводить: second
console.log(arr(2)); // Виводить: third

console.log(arr.pop()); // Виводить: third
console.log(arr.pop()); // Виводить: second
console.log(arr.pop()); // Виводить: first

console.log(arr.pop()); // Виводить: undefined


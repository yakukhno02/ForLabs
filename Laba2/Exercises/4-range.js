'use strict';
// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = (start, end) => {
  const length = end - start + 1;
  if (length < 0) return [];
  const array = new Array(length);
  for (let i = 0; i < length; i++) {
    array[i] = start + i;
  }
  return array;
};
console.log(range(15, 30));
module.exports = { range };

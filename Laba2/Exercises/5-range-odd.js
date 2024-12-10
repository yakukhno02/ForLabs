'use strict';

const rangeOdd = (start, end) => {
  const length = Math.ceil((end - start) / 2);
  if (length < 0) return [];
  const array = new Array(length);
  let i = 0;
  for (let n = start; n <= end; n++) {
    if (n % 2 !== 0) {
      array[i++] = n;
    }
  }
  return array;
};

console.log(rangeOdd(15, 30));

module.exports = { rangeOdd };

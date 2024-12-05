'use strict';

const pipe = (...fns) => {
 for (const f of fns) {
     if (typeof f !== 'function') {
         throw new TypeError('Function must be a function');
     }
 }
 return (x) => fns.reduce((v, func) => func(v), x);
 }


const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

//const f = pipe(inc, twice, cube);
//const x = f(5);
//console.log(x); // result: 1728

//const f = pipe(inc, inc);
//const x = f(7);
//console.log(x); // result: 9

const f = pipe(inc, 7, cube);
//  throw new TypeError('Function must be a function');



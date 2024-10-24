'use strict';

function inc(n){
    return ++n;
}
const a = 5;
const b = inc(a);

console.dir({a,b})


inc = (obj) => ++obj.n;
const obj = {n: 5};
inc(obj);
console.dir(obj);

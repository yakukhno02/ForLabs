const a = sum(1, 2, 3) // a === 6
const b = sum(0) // b === 0
const c = sum() // c === 0
const d = sum(1, -1, 1) // d === 1
const e = sum(10, -1, -1, -1) // e === 7

function sum(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}

function sum(...args) {
    let result = 0;
    for (const arg of args) {
        result += arg;
    }
    return result;
}

function sum(...args) {
    let result = 0;
    let i = 0;
    while (i < args.length) {
        result += args[i];
        i++;
    }
    return result;
}
function sum(...args) {
    let result = 0;
    let i = 0;
    do {
        if (args.length === 0) {
            return result;
        }
        result += args[i];
        i++;
    } while (i < args.length);
    return result;
}

function sum(...args) {
    let result = 0;
    if (args.length === 0) {
        return result;
    }
    result = args.reduce((acc, curr) => acc + curr, 0);
    return result;

}

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

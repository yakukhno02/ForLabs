function seq(...args) {

    const functions = [...args];

    const chain = (...args) => {
        if (typeof args[0] === "number") {
            return functions.reduceRight((result, func) => func(result), args[0]);
        } else {
            functions.push(...args);
            return chain;
        }
    };

    return chain;
}

console.log(seq(x => x + 7)(x => x * 2)(5));
console.log(seq(x => x * 2)(x => x + 7)(5));
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7));


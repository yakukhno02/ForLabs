const seq = (f) => {
    return (g) => {
        if (typeof g === 'number') {
            return f(g);
        } else {
            return seq((x) => {
                return f(g(x));
            });
        }
    };
};

module.exports = { seq };

console.log(seq(x => x + 7)(x => x * 2)(5));
console.log(seq(x => x * 2)(x => x + 7)(5));
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7));


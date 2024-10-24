const arr = [true, 'hello', 5, 12, -200, false, false, 'word', 14, 'laba', '88', 'git', 946, 'hub', false];

let types = {};

for (let i = 0; i < arr.length; i++) {
    const type = typeof arr[i];

    if (!types[type]) {
        types[type] = 0;
    }

    types[type] += 1;
}

console.log(types);

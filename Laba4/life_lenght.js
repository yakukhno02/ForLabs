const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
};

function age(persons) {
    let result = {};
    for (let person in persons) {
        let lifeLength = persons[person].died - persons[person].born;
        result[person] = lifeLength;

    }
    return result;
}

console.log(age(persons));
// {
//   lenin: 54,
//   mao: 83,
//   gandhi: 79,
//   hirohito: 88,
// }

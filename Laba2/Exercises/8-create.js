'use strict';

const createUser = (name, city) => ({ name, city });

console.log(createUser('Maria', 'Nurnberg'));
module.exports = { createUser };

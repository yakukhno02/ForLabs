'use strict';

const phonebook = {
  Marcus: '0283784665',
  Gay: '0283784665',
};

const findPhoneByName = (name) => phonebook[name];
module.exports = { phonebook, findPhoneByName };

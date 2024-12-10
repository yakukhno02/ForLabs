'use strict';

const phonebook = [
  { name: 'Maria', phone: '+380682715004' },
  { name: 'Madin', phone: '+380682715005' },
];

const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
};

module.exports = { phonebook, findPhoneByName };

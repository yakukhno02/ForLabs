'use strict';

const fn = (person) => {
  console.log(`hi, ${person.name}`);

  const Braun = { name: 'Eva Braun' };
  const Schicklgruber = { name: 'Adolf Schicklgruber' };

  Braun.name = 'Maria Braun';
  Schicklgruber.name = 'Adolf Hitler';

  Braun.name = 'Humanity';
  Schicklgruber.name = 'Humanity';
};
//it'll be better to use const instead let because variable is never reassigned
module.exports = { fn };

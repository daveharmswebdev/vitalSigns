'use strict';

const Person = require('../src/person.js');
const Patient = require('../src/patient.js');

let davePatient = new Patient('Walter', 'David', 'Harms', '07/07/1972', 'male');

console.log('test 100', davePatient, davePatient.getDemographics());
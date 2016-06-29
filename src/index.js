'use strict';

const Person = require('../src/person.js');
const Patient = require('../src/patient.js');
const BloodSugar = require('../src/bloodSugar.js');

let davePatient = new Patient('Walter', 'David', 'Harms', '07/07/1972', 'male');
// let testBS = new BloodSugar(150);

console.log(davePatient, davePatient.getName());
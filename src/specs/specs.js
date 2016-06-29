"use strict";

var Person = require('../person.js');
var getAge = require('../getAge.js');
var Patient = require('../patient.js');

describe('specs for patient.js', function() {

	it('expect person to be defined', function() {
		expect(Patient).toBeDefined();
	});

	let testPatient = new Patient('Harms', 'Walter', 'Harms', '7/7/1972', 'male');
	it('able to set gender', function() {
		expect(testPatient.gender).toBe('male');
	});

	it('getDemographics should return age and gender', function() {
		expect(testPatient.getDemographics()).toBe('43 male');
	});

});

describe('getAge specs', function() {
	it('expect get age to be defined', function() {
		expect(getAge).toBeDefined();
	});
	it('should give back the correct age', function() {
		expect(getAge('7/7/1972')).toBe(43);
	});
});	

describe('specs for person.js', function() {

	it('expect person to be defined', function() {
		expect(Person).toBeDefined();
	});
	it('should return a full name', function() {
		let testName = new Person('Harms', 'Walter', 'Dave');
		expect(testName.getName()).toContain("Walter Dave Harms");
	});

});
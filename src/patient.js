'use strict';

var Person = require('../src/person.js');
var getAge = require('../src/getAge.js');

var Patient = function(first, last, middle, birthdate, gender) {
	this.firstName = this.firstName || first;
	this.lastName = this.lastName || last;
	this.middleName = this.middleName || middle;
	this.gender = gender;
	this.age = getAge(birthdate);
	this.getDemographics = function() {
		return `${this.age} ${this.gender}`;
	};
};

module.exports = Patient;
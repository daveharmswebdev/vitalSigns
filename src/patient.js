'use strict';

var Person = require('../src/person.js');
var getAge = require('../src/getAge.js');

var Patient = function(first, last, middle, birthdate, gender) {
	Person.call(this, last, first, middle);
	this.gender = gender;
	this.age = getAge(birthdate);
	this.bloodSugars = [];
	this.getDemographics = function() {
		return `${this.age} ${this.gender}`;
	};
};
Patient.prototype = new Person();
Patient.prototype.setBloodSugar = function(bs) {
	this.bloodSugars.push(bs);
};

module.exports = Patient;
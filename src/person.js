"use strict";

var Person = function(last, first, middle) {
	this.lastName = last || '';
	this.firstName = first || '';
	this.middleName = middle || '';
};

Person.prototype.getName = function() {
	let middle = this.middleName.length > 0 ? ` ${this.middleName} ` : '';
	return `${this.firstName}${middle}${this.lastName}`;
};

module.exports = Person;
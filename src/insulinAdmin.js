'use strict';

var InsulinAdmin = function(dose) {
	this.date = Date();
	this.dose = dose;
};
InsulinAdmin.prototype.getDate = function() {
	return this.date;
};
InsulinAdmin.prototype.getDose = function() {
	return this.dose;
}

module.exports = InsulinAdmin;
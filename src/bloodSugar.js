'use strict';

var BloodSugar = function(score) {
	this.score = score;
	this.date = Date();
};
BloodSugar.prototype.getScore = function() {
	return this.score;	
}; 
BloodSugar.prototype.getDate = function() {
	return new Date(this.date);
}; 

module.exports = BloodSugar;
'use strict';

var BloodSugar = require('../bloodSugar.js');

describe('specs for bloodSugar.js', function() {

	it('expect blood sugar to be defined', function() {
		expect(BloodSugar).toBeDefined();
	});

	let testBS = new BloodSugar(150);
	it('will return a date and a score', function() {
		expect(testBS.getDate()).toBeDefined();
		expect(testBS.getScore()).toBe(150);
	});
});
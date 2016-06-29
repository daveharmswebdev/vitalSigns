'use strict';

var InsulinAdmin = require('../insulinAdmin.js');

describe('specs for insulin admin', function() {

	it('expect insulinAdmin to be defined', function() {
		expect(InsulinAdmin).toBeDefined();
	});

	let testInsulin = new InsulinAdmin(4);
	it('expect a date to be returned', function() {
		expect(testInsulin.getDate()).toBe(Date());
	});

	it('should expect a dose to be returned', function() {
		expect(testInsulin.getDose()).toBe(4);
	});

});
'use strict';

module.exports = function(birthday) {
	let bdate = birthday.split('/');
	let birthDate = new Date(parseInt(bdate[2]), parseInt(bdate[0] - 1), parseInt(bdate[1]));
	let today = new Date();
	let today_date = today.getUTCDate();
	let today_month = today.getUTCMonth();
	let today_year = today.getFullYear();
	let b_date = parseInt(bdate[1]);
	let b_month = parseInt(bdate[0] -1);
	let b_year = parseInt(bdate[2]);
	if (today_month > b_month) {
		return today_year - b_year;
	} else if (today_month < b_month) {
		return today_year - 1 - b_year;
	} else if (today_month === b_month && today_date > b_date) {
		return today_year - b_year;
	} else {
		return today_year - 1 - b_year;	
	}
};
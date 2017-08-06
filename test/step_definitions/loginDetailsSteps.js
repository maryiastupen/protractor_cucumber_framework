var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
	
	When(/^I change my previous password '([^']*)' to the new one '([^']*)'$/, function (currentPassword, newPassword) {
    return this.pageFactory.currentPage.changePassword(currentPassword, newPassword);
	});
	When(/^I change my previous email to the new one '([^']*)', having '([^']*)' password$/, function (newEmail, currentPassword) {
    return this.pageFactory.currentPage.changeEmail(newEmail, currentPassword);
	});
	When(/^I log out$/, function () {
		return this.pageFactory.currentPage.logOut();
	});

});

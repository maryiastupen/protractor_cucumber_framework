var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

	When(/^I click on my account and login links$/, function () {
    return this.pageFactory.currentPage.clickOnAccountLink()
		.then(()=>{
      return this.pageFactory.currentPage.clickOnLoginButton()
    });
	});

	Given(/^I click on login details link$/, function () {
		return this.pageFactory.currentPage.clickOnAccountLink()
		.then(()=>{
			return this.pageFactory.currentPage.clickOnLoginDetailsLink();
		});
	});
	
});

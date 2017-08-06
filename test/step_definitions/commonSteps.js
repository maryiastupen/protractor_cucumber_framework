var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

  When(/^I search for '(.+)'$/, function (query) {
    return this.pageFactory.currentPage.makeQuery(query);
	});

  Given(/^I am on page with the title '(.+)'$/, function (expectedTitle) {
    return this.pageFactory.currentPage.getTitle()
    .then((title)=>{
      return expect(title).to.equal(expectedTitle);
    });
	});

  When(/^I close modal dialog of successful data change$/, function () {
  	return this.pageFactory.currentPage.closeConfirmation();
  });

});

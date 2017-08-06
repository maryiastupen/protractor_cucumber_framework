var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

  When(/^I get the following search results: '(.+)'$/, function (expectedText) {
    return this.pageFactory.currentPage.verifySearchResults(expectedText)
  });

  When(/^I get the following error: '(.+)'$/, function (expectedText) {
    return this.pageFactory.currentPage.verifyError(expectedText)
  });

  When(/^I set '(.+)' filter$/, function (filterName) {
    return this.pageFactory.currentPage.setFilter(filterName)
  });

  When(/^I click on '(.+)' link$/, function (linkName) {
    return this.pageFactory.currentPage.clickLink(linkName);
  });

});

var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

  When(/^I login with email '(.+)' and password '(.+)'$/, function (email, password) {
    return this.pageFactory.currentPage.login(email, password);
  });
  
});

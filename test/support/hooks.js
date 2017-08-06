var { defineSupportCode } = require("cucumber");

defineSupportCode(function({Before, setDefaultTimeout}) {

  setDefaultTimeout(60 * 1000);

  Before(function() {
    return browser.driver.manage().window().maximize();
  });

});

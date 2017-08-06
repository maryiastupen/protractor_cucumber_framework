var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

	When(/^I cancel committed order, clearing the basket's content$/, function () {
    return this.pageFactory.currentPage.clearBusket()
		.then(()=>{
			return this.pageFactory.currentPage.ensureEmptiness();
		})
	});

});

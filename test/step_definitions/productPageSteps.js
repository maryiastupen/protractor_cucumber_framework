var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

	When(/^I add products to basket, setting quantity of '(.+)' items and weight of '(.+)'$/, function (quantity, weight) {
    return this.pageFactory.currentPage.addProductsToTheBasket(quantity, weight);
	});

	Then(/^total amount in my basket appears to be '(.+)'$/, function (totalAmount) {
    return this.pageFactory.currentPage.verifyTotalAmount(totalAmount);
	});

	Then(/^I click on busket link$/, function () {
    return this.pageFactory.currentPage.enterBusket();
	});

});

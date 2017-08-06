var homePage = require('./homePage');
var loginPage = require('./loginPage');
var loginDetailsPage = require('./loginDetailsPage');
var queryResultsPage = require('./queryResultsPage');
var productPage = require('./productPage');
var busketPage = require('./busketPage');

var PageFactory = function(world){

    var _this = this;

    _this.currentPage = 'undefined';

    _this.getPage = function(page){
        var pages = {
            'home': homePage,
            'login': loginPage,
            'login-details': loginDetailsPage,
            'query-results': queryResultsPage,
            'product': productPage,
            'busket': busketPage
        };
        if(!pages[page]){
            throw new Error('Wrong page name: '+pages[page]);
        }
        _this.currentPage = new pages[page](world);
        return _this.currentPage;
    };
};

module.exports = PageFactory;

var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var homePage = function(world){
  var _this=this;
  _this.world = world;
  _this.marker = 'home';

  _this._data = {
    elements: {
      accountLink: {
          css: '.navbar__account',
          text: 'My account',
          isSingle: true
      },
      loginDetailsLink: {
          css: '.navbar__account-dropdown li:nth-child(8) a',
          isSingle: true
      },
      loginButton: {
          css: '.button[data-synthetics="header-account-dropdown-login"]',
          isSingle: true
      },
      searchField: {
        css: 'input.navbar__search-field',
        isSingle: true
      },
      searchButton: {
        css: 'button.button.button--icon',
        isSingle: true
      }
    }
  };

  _this.clickOnAccountLink = function(){
    return _this.world.helper.elementGetter(_this._root,_this._data.elements.accountLink).waitReady()
      .then((element)=>{
        return element.click();
      });
  };
  _this.clickOnLoginButton = function(){
    return _this.world.helper.elementGetter(_this._root,_this._data.elements.loginButton).click()
      .then(()=>{
    return _this.world.browserUtils.changePage('login');
    });
  };

  _this.makeQuery = function(query){
    return _this.world.helper.elementGetter(_this._root,_this._data.elements.searchField).sendKeys(query).then(()=>{
    }).then(()=>{
      return _this.world.helper.elementGetter(_this._root,_this._data.elements.searchButton).click();
    }).then(()=>{
      return _this.world.browserUtils.changePage('query-results');
    });
  };
  _this.clickOnLoginDetailsLink = function(){
    return _this.world.helper.elementGetter(_this._root,_this._data.elements.loginDetailsLink).waitReady()
      .then((element)=>{
        element.click();
      }).then(()=>{
      return _this.world.browserUtils.changePage('login-details')
    });
  };
};

inheritance.inherits(Page,homePage);

module.exports = homePage;

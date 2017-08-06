var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var loginPage = function(world){
  var _this=this;
  _this.world = world;
  _this.marker = 'login';

  _this._data = {
    elements: {
      emailField: {
        id: 'username',
        isSingle: true
      },
      passwordField: {
        id: 'password',
        isSingle: true
      },
      submitButton: {
        css: '.button[data-synthetics="login-submit"]',
        isSingle: true
      }
    }
  };

  _this.login = function(email, password){

    return _this.world.helper.elementGetter(_this._root,_this._data.elements.emailField).waitReady()
      .then((element)=>{
        return element.sendKeys(email);
      }).then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.passwordField).sendKeys(password);
      }).then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.submitButton).click();
      }).then(()=>{
      return _this.world.browserUtils.changePage('home');
    });
  };

};
inheritance.inherits(Page,loginPage);

module.exports = loginPage;

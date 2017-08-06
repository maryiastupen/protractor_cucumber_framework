var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var loginDetailsPage = function(world){
  var _this=this;
  _this.world = world;
  _this.marker = 'login-details';

  _this._data = {
    elements: {
      oldPasswordField: {
        id: 'oldPassword',
        isSingle: true
      },
      newPasswordField: {
        id: 'newPassword',
        isSingle: true
      },
      passwordConfirmationField: {
        id: 'passwordConfirmation',
        isSingle: true
      },
      newEmailField: {
        id: 'email',
        isSingle: true
      },
      emailConfirmationField: {
        id: 'confirmEmail',
        isSingle: true
      },
      passwordField: {
        id: 'password',
        isSingle: true
      },
      updateButton:{
        css: '.button',
        text:"Update",
        isSingle: false
      },
      modalDialog:{
        css: '.modal-container',
        isSingle: true
      },
      okButton:{
        css: '.button',
        text:"Ok",
        isSingle: true
      },
      closeButton:{
        css: '.icon--close',
        isSingle: true
      },
      accountLink: {
          css: '.navbar__account',
          text: 'My account',
          isSingle: true
      },
      logOutLink:{
        css: 'input[value="Log out"]',
        isSingle: true
      }
    }
  };

  _this.changePassword = function(currentPassword, newPassword){
    return _this.world.helper.elementGetter(_this._root,_this._data.elements.oldPasswordField).isPresentAndDisplayed()
      .then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.oldPasswordField).scrollIntoView();
      }).then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.oldPasswordField).sendKeys(currentPassword);
      }).then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.newPasswordField).sendKeys(newPassword);
      }).then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.passwordConfirmationField).sendKeys(newPassword);
      }).then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.updateButton);
      }).then((elements) => {
        return elements[1].click();
      });
  };

  _this.changeEmail = function(newEmail, currentPassword){
    return _this.world.helper.elementGetter(_this._root,_this._data.elements.newEmailField).isPresentAndDisplayed()
      .then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.newEmailField).sendKeys(newEmail);
      }).then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.emailConfirmationField).sendKeys(newEmail);
      }).then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.passwordField).sendKeys(currentPassword);
      }).then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.updateButton);
      }).then((elements) => {
        return elements[0].click();
      });
  };

  _this.logOut = function(){
    return _this.world.helper.elementGetter(_this._root,_this._data.elements.accountLink).isPresentAndDisplayed()
      .then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.accountLink).click();
      }).then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.logOutLink).isPresentAndDisplayed();
      }).then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.logOutLink).click();
      }).then(()=>{
        return _this.world.browserUtils.changePage('home');
      });
  };

  _this.closeConfirmation = function(){
    return _this.world.helper.elementGetter(_this._root,_this._data.elements.okButton).isPresentAndDisplayed()
      .then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.okButton).click();
      }).then(()=>{
        return _this.world.browserUtils.changePage('login-details');
    });
  };
};
inheritance.inherits(Page,loginDetailsPage);

module.exports = loginDetailsPage;

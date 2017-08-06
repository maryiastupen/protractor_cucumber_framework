var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var busketPage = function(world){
  var _this=this;
  _this.world = world;
  _this.marker = 'busket';

  _this._data = {
    elements: {
      exitSign: {
          css: 'button[data-test="button-remove-item"]',
          isSingle: true
      },
      emptinessAlert: {
          css: 'div[data-test="basket-empty"]',
          isSingle: true
      }
    }
  };

  _this.clearBusket = function(){
    return _this.world.helper.elementGetter(_this._root,_this._data.elements.exitSign).waitReady()
      .then((element)=>{
        element.click();
		});
  };

  _this.ensureEmptiness = function(){
    return _this.world.helper.elementGetter(_this._root,_this._data.elements.emptinessAlert).isDisplayed()
      .then(()=>{
        return _this.world.browserUtils.changePage('home');
      });
    };
};

inheritance.inherits(Page,busketPage);

module.exports = busketPage;

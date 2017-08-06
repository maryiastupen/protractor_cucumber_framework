var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var productPage = function(world){
  var _this=this;
  _this.world = world;
  _this.marker = 'product';

  _this._data = {
    elements: {
      sizeButton: {
          css: 'span.button',
          text: '',
          isSingle: true
      },
      quantityInput: {
          css: 'input[name="quantity"]',
          isSingle: true
      },
      addToBasketButton: {
          css: 'button[data-synthetics="bop-add-btn"]',
          isSingle: true
      },
      basketSpan: {
          css: 'span.navbar__checkout-price',
          isSingle: true
      },
    }
  };

  _this.addProductsToTheBasket = function(quantity, weight){

    _this._data.elements.sizeButton.text = weight;

    return _this.world.helper.elementGetter(_this._root,_this._data.elements.sizeButton).isPresentAndDisplayed()
      .then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.sizeButton).click();
      }).then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.quantityInput).click().clear().sendKeys(quantity);
      }).then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.addToBasketButton).click();
    });
  };

  _this.verifyTotalAmount = function(totalAmount){
    return _this.world.helper.elementGetter(_this._root,_this._data.elements.basketSpan).getText()
      .then((amount)=>{
        return expect(amount).to.equal(totalAmount);
    });
  };

  _this.enterBusket = function(totalAmount){
    return _this.world.helper.elementGetter(_this._root,_this._data.elements.basketSpan).click()
      .then(()=>{
        return _this.world.browserUtils.changePage('busket');
    });
  };
};

inheritance.inherits(Page,productPage);

module.exports = productPage;

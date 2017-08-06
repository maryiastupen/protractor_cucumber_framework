var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var queryResultsPage = function(world){
  var _this=this;
  _this.world = world;
  _this.marker = 'query-results';

  _this._data = {
    elements: {
      errorHeadLine: {
          css: 'h2.headline',
          isSingle: true
      },
      searchResultsSpan: {
          css: 'span.breadcrumb__item--active',
          isSingle: true
      },
      option: {
          css: 'option',
          text: '',
          isSingle: true
      },
      feedLink: {
          css: 'span',
          text: '',
          isSingle: true
      },
    }
  };

  _this.verifyError = function(expectedText){
    return _this.world.helper.elementGetter(_this._root,_this._data.elements.errorHeadLine).waitReady()
      .then((element)=>{
        return element.getText();
      }).then((text)=>{
        return expect(text).to.equal(expectedText);
    });
  };

  _this.verifySearchResults = function(expectedText){
    return _this.world.helper.elementGetter(_this._root,_this._data.elements.searchResultsSpan).waitReady()
      .then((element)=>{
        return element.getText();
      }).then((text)=>{
        return expect(text).to.equal(expectedText);
    });
  };

  _this.setFilter = function(filterName){
    _this._data.elements.option.text = filterName;
    return _this.world.helper.elementGetter(_this._root,_this._data.elements.option).waitReady()
      .then((element)=>{
        return element.click();
      });
  };

  _this.clickLink = function(linkName){
    _this._data.elements.feedLink.text = linkName;
    return _this.world.helper.elementGetter(_this._root,_this._data.elements.feedLink).click()
    .then(()=>{
      return _this.world.browserUtils.changePage('product')
    });
  };

};

inheritance.inherits(Page,queryResultsPage);

module.exports = queryResultsPage;

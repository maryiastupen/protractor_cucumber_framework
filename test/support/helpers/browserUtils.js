var BrowserUtils = function(world){
    var _this = this;

    _this._data = {};

    _this.clearLocalStorage = function (){
        return browser.executeScript('window.localStorage.clear();');
    };
    _this.navigateTo = function(page){
      world.pageFactory.getPage(page);
        return browser.get(browser.baseUrl);
    };

    _this.changePage = function(page){
     	world.pageFactory.getPage(page);
		return true;
	};

	_this.writeScreenShot = function(data, filename) {
		var fs = require("fs");
	  var stream = fs.createWriteStream(filename);
	  stream.write(new Buffer(data, 'base64'));
	  stream.end();
	};

    _this.returnToMainWindow = function(){
        return browser.getAllWindowHandles()
            .then(function(handles){
                if(handles.length > 1){
                    browser.driver.close();
                    return browser.switchTo().window(handles[0]);
                }
            });
    };

};

module.exports = BrowserUtils;

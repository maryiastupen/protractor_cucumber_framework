var Page = function(){};

Page.prototype._root = element(by.css('body'));

Page.prototype._commonData = {
	elements: {}
};

Page.prototype.getTitle = function(){
	return browser.getTitle();
};

module.exports = Page;

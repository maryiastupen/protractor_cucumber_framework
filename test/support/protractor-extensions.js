var specTimeoutMs = 30000;

/**
 * This is used when an element is expected to 'move' into a position.
 * It will check the left most edge of the element is on screen (i.e. greater than or equal 0)
 * and then check it becomes 'stable' (i.e. not changed)
 *
 * @returns a promise that resolves to the element
 */
protractor.ElementFinder.prototype.waitToBeCompletelyVisibleAndStable = function () {
    var self = this,
        lastXLocation,
        lastYLocation;

    function isCompletelyVisible(location, size) {
        if (location.x >= 0) {
            if (location.x + size.width >= 0) {
                return true;
            }
        }

        return false;
    }

    return self.getSize()
        .then(function (size) {
            browser.wait(function() {
                return self.getLocation()
                    .then(function (location) {
                        if (lastXLocation === undefined) {
                            lastXLocation = location.x;
                            lastYLocation = location.y;
                        }
                        else {
                            if (isCompletelyVisible(location, size) && (lastXLocation === location.x && lastYLocation === location.y)) {
                                return true;
                            } else {
                                lastXLocation = location.x;
                                lastYLocation = location.y;
                            }
                        }
                        return false;
                    });
            }, specTimeoutMs, 'timed out waiting for element to be completely visible and stable');
        })
        .then (function () {
        return self;
    });
};


/**
 * This is used to explicity wait for an element to become present and displayed
 * This should be used when the element can be controlled outside of Angulars digests cycles (e.g. css animations)
 *
 * @returns a promise that resolves to the element
 */
protractor.ElementFinder.prototype.waitReady = function() {
    var self = this;
    return browser.wait(function() {
        return self.isPresentAndDisplayed();
    }, specTimeoutMs, 'timed out waiting for element')
        .then(function () {
            return self;
        });
};

/**
 * This is used to determine an element is present (in the DOM) and is displayed.
 *
 * @returns a promise that resolves to true or false
 */
protractor.ElementFinder.prototype.isPresentAndDisplayed = function () {
    var self = this;

    return self.isPresent().then(function (present) {
        if (present) {
            return self.isDisplayed();
        }

        return false;
    });
};

protractor.ElementFinder.prototype.scrollIntoView = function (alignToTop) {
    var self = this;

    alignToTop = alignToTop !== undefined ? alignToTop : true;

    return browser.executeScript('arguments[0].scrollIntoView(arguments[1]);', self.getWebElement(), alignToTop)
        .then(function () {
            return self.waitToBeCompletelyVisibleAndStable();
        });
};

protractor.ElementFinder.prototype.scrollToAndClick = function () {
    var self = this,
        alignToTop = false;

    return this.scrollIntoView(alignToTop)
        .then(function () {
            return self.click();
        });
};


protractor.ElementFinder.prototype.selectByValue = function(value){
	var self = this,
		alignToTop = false;

	return this.scrollIntoView(alignToTop)
		.then(function () {
			return self.click();
		})
		.then(function () {
			var option = self.element(by.cssContainingText('option',value));
			if(process.env.CURRENT_BROWSER === 'firefox'){
                    return browser.actions().mouseDown(option).mouseUp().perform();
                }else{
                    return option.click();
                }
		});
};

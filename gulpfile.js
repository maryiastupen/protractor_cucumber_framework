var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;
var gutil = require('gulp-util');

function runProtractorConfig() {

	gutil.env.browser ? process.env.BROWSER = gutil.env.browser : process.env.BROWSER = 'chrome';
	gutil.env.tags ? process.env.TAGS = gutil.env.tags : process.env.TAGS = '@data_change';

  return gulp.src("features/*.feature")
		.pipe(protractor({
    	configFile: "test/protractor-conf.js"
  	}))
		.on('end', function() {
      console.log("Task has been successfully executed.");
    })
}
gulp.task('run', runProtractorConfig);

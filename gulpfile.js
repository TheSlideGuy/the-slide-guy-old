var gulp = require('gulp');
var fs = require('fs');

var jscs = require('gulp-jscs');
var jscsrc = JSON.parse(fs.readFileSync('./package.json'));

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('lint', function(){
    return gulp.src('app/app.js')
        .pipe(jscs(jscsrc));
});

var gulp = require('gulp');
var fs = require('fs');

var jscs = require('gulp-jscs');
var jscsrc = JSON.parse(fs.readFileSync('./.jscsrc'));

gulp.task('default', function() {
    console.log('\n gulp <command> \
    \n     Command List: \
    \n         lint \
    \n')
});

gulp.task('lint', function(){
    return gulp.src('app/app.js')
        .pipe(jscs(jscsrc));
});

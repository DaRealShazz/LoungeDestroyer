var gulp = require('gulp');
var jscs = require('gulp-jscs');

gulp.task('default', function () {
    return gulp.src('app/items.js')
        .pipe(jscs());
});
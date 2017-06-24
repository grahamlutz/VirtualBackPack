// 
var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    karma = require('gulp-karma'),
    uglify = require('gulp-uglify'),
    JS_PATH = "public/scripts/",
    DIST_PATH = "dist/",
    TEST_PATH = "test/";

gulp.task('default', function() {
  console.log('Running Gulp tasks!');
})

// Bundle up with Browserify, Minify and copy JavaScript
gulp.task('scripts', function() {
    return gulp.src(JS_PATH + 'app.js')
        .pipe(browserify({
            insertGlobals: true
        }))
        .pipe(uglify())
        .pipe(gulp.dest(DIST_PATH  + 'scripts/'));
});

gulp.task('test-ui', function() {
    return gulp.src('./idontexist') // See https://github.com/lazd/gulp-karma/issues/9
        .pipe(karma({
            configFile: TEST_PATH + 'karma.conf.js'
        }))
        .on('error', handleError);
});

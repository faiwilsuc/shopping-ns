'use strict';

var gulp = require('gulp');

var npmDir = 'node_modules/';

gulp.task('copy-font-awesome', function () {
    return gulp.src( npmDir + 'font-awesome/fonts/fontawesome-webfont.ttf').pipe(gulp.dest( 'app/fonts' ));

});

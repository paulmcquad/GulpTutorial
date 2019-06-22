var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');


// Compile SCSS/SASS
gulp.task('sass', function(){
   return gulp.src('app/style.scss')
      .pipe(sass())
      .pipe(cssnano())
      .pipe(gulp.dest('dist/css'));
});

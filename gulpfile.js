'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var minifyCSS = require('gulp-clean-css');
var prefix = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

//SASS-CSS
var SASS_SRC = './src/assets/sass/**/*.sass';
var SASS_DEST = './src/assets/css';

//Compile SASS
gulp.task('compile_sass', function(){
	gulp.src(SASS_SRC)
	.pipe(sass().on('error', sass.logError))
	.pipe(concatCss('common.css'))
	.pipe(prefix('last 25 versions'))
	.pipe(minifyCSS(''))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest(SASS_DEST));
});


//Detect changes in SASS
gulp.task('watch_sass', function(){
	gulp.watch(SASS_SRC, ['compile_sass']);
});

//Run tasks
gulp.task('default', ['watch_sass']);
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var minify = require('gulp-minify');
var concat = require("gulp-concat");


gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('minify-js', function() {
    //'lib/*.js'
  gulp.src([
        'bower_components/angular/angular.js',
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',                       
            ])
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        }}))    
    .pipe(concat('vendor.js'))
    .pipe(rename({ suffix: '.min',}))
    .pipe(gulp.dest('public/javascripts'))
});

gulp.task('minify-css', function() {
    //gulp.src('/src/*.css')
    return gulp.src([
            'bower_components/bootstrap/dist/css/bootstrap.css',           
            ])
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(rename({ suffix: '.min', basename: "vendor", }))
        .pipe(gulp.dest('public/stylesheets'));
    });
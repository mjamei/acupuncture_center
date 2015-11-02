var gulp       = require('gulp');
var config     = require('../config').css;
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');
var csswring = require('csswring');
var browserSync  = require('browser-sync');

gulp.task('css', function() {
  var processors = [
    autoprefixer({browsers: ['last 1 version']}),
    csswring
  ];
  return gulp.src(config.src)
    .pipe(postcss(processors))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});



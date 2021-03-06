var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');

function styles() {
  return gulp.src('packages/nhsuk.scss')
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('packages/'))
    .on('error', (err) => {
      console.log(err)
      process.exit(1)
    })
}

function scripts() {
  return gulp.src([
    'packages/components/header/typeahead.bundle.min.js',
    'packages/components/header/nhs.typeahead.js',
    'packages/components/header/header.js',
    'packages/components/details/details.js',
    'packages/components/feedback-banner/feedback-banner.js',
    'packages/components/skip-link/skip-link.js',
  ])
  .pipe(concat('nhsuk.js'))
  .pipe(uglify())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('packages/'));
}

function bundle() {
  return gulp.src([
    'packages/nhsuk.min.css',
    'packages/nhsuk.js',
    'packages/assets/libraries/*.js'
  ])
  .pipe(gulp.dest('dist/'));
}

function watch() {
  gulp.watch('packages/**/*.scss', styles);
}

exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;

gulp.task('build', styles);
gulp.task('default', watch);
gulp.task('scripts', scripts);
gulp.task('bundle', bundle);

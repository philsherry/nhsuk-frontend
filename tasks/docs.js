var gulp = require('gulp');

var rename = require('gulp-rename');
var gulpNunjucks = require('gulp-nunjucks');
var nunjucks = require('nunjucks');
var nunjucksMd = require('gulp-nunjucks-md');
var connect = require('gulp-connect');

var config = {
  templates: ['docs/_templates', 'packages'],
  dest: 'dist/docs'
}

/**
 * Turn markdown into html with a nunjucks layout
 */
function buildMarkdown() {
  return gulp.src(['docs/**/*.md'])
    .pipe(
      nunjucksMd({
        path: config.templates,
        data: {
          //site-wide data goes here
          page: {
            layout: 'page',
          }
        }
      })
    )
    .pipe(gulp.dest(config.dest))
}

/**
 * Turn nunkucks files into html
 */
function buildNunjucks() {
  return gulp.src(['docs/*.njk'])
    .pipe(gulpNunjucks.compile({
      // site-wide data goes here
    }, {
      env: new nunjucks.Environment(
        new nunjucks.FileSystemLoader(config.templates)
      ),
    }))
    .pipe(rename({
      extname: '.html',
    }))
    .pipe(gulp.dest(config.dest))
}

/**
 * Copy built assets from dist into the documentation directory
 */
function copyBuiltAssets() {
  return gulp.src('dist/*.{css,js}')
    .pipe(gulp.dest(config.dest + '/assets/'))
}

/**
 * Serve the static docs directory over localhost
 */
function serve() {
  connect.server({
    root: config.dest,
    livereload: true,
    port: 3000,
  });
}

/**
 * Reload the connect server
 */
function reload() {
  return gulp.src(config.dest)
    .pipe(connect.reload())
}


gulp.task('docs:build', gulp.series(copyBuiltAssets, buildMarkdown, buildNunjucks, reload));
gulp.task('docs:serve', gulp.series(['docs:build', serve]));

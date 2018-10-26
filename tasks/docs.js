var gulp = require('gulp');

var rename = require('gulp-rename');
var gulpNunjucks = require('gulp-nunjucks');
var nunjucks = require('nunjucks');
var nunjucksMd = require('gulp-nunjucks-md');
var connect = require('gulp-connect');
var replace = require('gulp-replace');

var config = {
  templates: ['docs/_templates', 'packages'],
  dest: 'dist/docs',
  baseUrl: process.env.BASE_URL ? process.env.BASE_URL : '',
}

/**
 * Turn markdown into html with a nunjucks layout
 */
function buildMarkdown() {
  return gulp.src(['docs/**/*.md'])
    .pipe(replace(/\[([^\]]*?)\]\(([^\)]*?)\.md\)/g, function(match, p1, p2) {
      // replace .md links with .html
      return `[${p1}](${p2}.html)`;
    }))
    .pipe(
      nunjucksMd({
        path: config.templates,
        data: {
          //site-wide data goes here
          baseUrl: config.baseUrl,
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
      baseUrl: config.baseUrl,
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

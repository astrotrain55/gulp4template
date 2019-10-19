const { src, dest } = require('gulp');
const { onError } = require('gulp-notify');
const plumber = require('gulp-plumber');
const stylus = require('gulp-stylus');
const gcmq = require('gulp-group-css-media-queries');
const csscomb = require('gulp-csscomb');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const nib  = require('nib');
const route = require('../routes');

module.exports = function css() {
  return src(route.styl.src, { sourcemaps: true })
    .pipe(plumber())
    .pipe(stylus({
      import: ['nib'],
      use: nib()
    }))
    .pipe(gcmq())
    .pipe(csscomb())
    .on('error', onError({
      title: 'Stylus',
      message: 'Error: <%= error.message %>'
    }))
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(rename({
      basename: route.name.css
    }))
    .pipe(dest(route.styl.dest, { sourcemaps: '.' }))
    .pipe($.sync.reload({
      stream: true
    }));
};

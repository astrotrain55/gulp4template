const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const stylus = require('gulp-stylus');
const csscomb = require('gulp-csscomb');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const gcmq = require('gulp-group-css-media-queries');

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
    .on('error', notify.onError({
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

const { src, dest } = require('gulp');
const { onError } = require('gulp-notify');
const plumber = require('gulp-plumber');
const stylus = require('gulp-stylus');
const rename = require('gulp-rename');
const { resolve } = require('path');
const route = require('../routes');

module.exports = function vendor() {
  return src(route.styl.vendor)
    .pipe(plumber())
    .pipe(stylus({
      'include css': true,
      compress: true,
      rawDefine: { // aliases
        node: resolve(__dirname, '..', '..', 'node_modules'),
        vendor: resolve(__dirname, '..', '..', 'vendor')
      }
    }))
    .on("error", onError({
      title: 'CSS',
      message: "Error: <%= error.message %>"
    }))
    .pipe(rename({
      basename: route.name.vendor
    }))
    .pipe(dest(route.styl.dest))
    .pipe($.sync.reload({
      stream: true
    }));
};

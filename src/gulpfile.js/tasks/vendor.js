const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const stylus = require('gulp-stylus');
const notify = require('gulp-notify');
const rename = require('gulp-rename');

const path = require('path');
const route = require('../routes');


module.exports = function vendor() {
  return src(route.styl.vendor)
    .pipe(plumber())
    .pipe(stylus({
      'include css': true,
      compress: true,
      rawDefine: { // aliases
        node: path.resolve(__dirname, '..', '..', 'node_modules'),
        vendor: path.resolve(__dirname, '..', '..', 'vendor')
      }
    }))
    .on("error", notify.onError({
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

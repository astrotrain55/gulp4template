"use strict";

require('./gulprc/paths.js');

global.$ = {
  fs: require('fs'),
  tasks: require('./gulprc/tasks.js'),

  gulp: require('gulp'),
  load: require('gulp-load-plugins')(),

  gcmq: require('gulp-group-css-media-queries'),
  include: require('gulp-file-include'),
  spritesmith: require("gulp.spritesmith"),
  svg: require('gulp-svg-sprites'),

  del: require('del'),
  nib: require('nib'),
  sync: require('browser-sync').create()
};

$.tasks.forEach((taskPath) => {
  require(taskPath)();
});

$.gulp.task('clear_cache', () => {
  return $.load.cache.clearAll();
});

$.gulp.task('default', $.gulp.series(
  $.gulp.parallel('vendorCSS', 'vendorJS'),
  $.gulp.parallel('pug', 'stylus', 'js'),
  $.gulp.parallel('serve', 'watch', 'ie')
));

"use strict";

require('./paths.js');

global.$ = {
  tasks: require('./tasks.js'),
  fs: require('fs'),
  gulp: require('gulp'),
  load: require('gulp-load-plugins')(),
  sync: require('browser-sync').create()
};

$.tasks.forEach((task) => {
  require(task)();
});

$.gulp.task('clear_cache', () => {
  return $.load.cache.clearAll();
});

$.gulp.task('default', $.gulp.series(
  $.gulp.parallel('pug', 'stylus', 'js'),
  $.gulp.parallel('serve', 'watch'),
));

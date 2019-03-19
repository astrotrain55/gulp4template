"use strict";

require('./gulprc/paths.js');

global.$ = {
  fs: require('fs'),
  tasks: require('./gulprc/tasks.js'),

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
  $.gulp.parallel('vendor', 'stylus', 'pug', 'js'),
  $.gulp.parallel('serve', 'watch', 'ie')
));

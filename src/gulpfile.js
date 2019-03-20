"use strict";

require('./gulprc/paths.js');

global.$ = {
  tasks: require('./gulprc/tasks.js'),
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
  $.gulp.parallel('ie')
));

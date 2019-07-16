"use strict";

const smartgrid = require('smart-grid');

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

$.gulp.task('clear', () => {
  return $.load.cache.clearAll();
});

$.gulp.task('grid', (done) => {
  delete require.cache[require.resolve(path.grid.settings)];
  const settings = require(path.grid.settings);
  smartgrid(path.grid.output, settings);
  done();
});

$.gulp.task('default', $.gulp.series(
  $.gulp.parallel('pug', 'stylus', 'js'),
  $.gulp.parallel('serve', 'watch'),
));

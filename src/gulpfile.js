require('./gulprc/paths.js');

global.$ = {
  gulp: require('gulp'),
  load: require('gulp-load-plugins')(),

  php7: require('gulp-connect-php7'),
  gcmq: require('gulp-group-css-media-queries'),
  include: require('gulp-file-include'),
  spritesmith: require("gulp.spritesmith"),
  svg: require('gulp-svg-sprites'),

  del: require('del'),
  nib: require('nib'),
  ftp: require('vinyl-ftp'),
  sync: require('browser-sync').create(),
  pngquant: require('imagemin-pngquant'),

  tasks: require('./gulprc/tasks.js')
};

$.tasks.forEach((taskPath) => {
  require(taskPath)();
});

$.gulp.task('clear_cache', () => {
  return $.load.cache.clearAll();
});

$.gulp.task('default', $.gulp.series(
  $.gulp.parallel('pug', 'stylus', 'js'),
  $.gulp.parallel('serve', 'watch')
));

global.$ = {
  gulp: require('gulp'),
  load: require('gulp-load-plugins')(),

  php7: require('gulp-connect-php7'),
  gcmq: require('gulp-group-css-media-queries'),
  inject: require('gulp-inject-string'),
  spritesmith: require("gulp.spritesmith"),

  del: require('del'),
  nib: require('nib'),
  sync: require('browser-sync').create(),
  pngquant: require('imagemin-pngquant'),

  path: {
    tasks: require('./gulprc/tasks.js')
  }
};

$.path.tasks.forEach(function(taskPath){
  require(taskPath)();
});

$.gulp.task('clear', function(){
  return $.load.cache.clearAll();
});

$.gulp.task('default', $.gulp.series(
  $.gulp.parallel('pug', 'stylus', 'js'),
  $.gulp.parallel('serve', 'watch')
));

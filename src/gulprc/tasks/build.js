module.exports = () => {
  $.gulp.task('php:build', () => {
    return $.gulp.src($.path.php.src)
      .pipe($.gulp.dest($.path.php.build));
  });
  $.gulp.task('css:build', () => {
    return $.gulp.src($.path.styl.dest + '/' + $.path.name.css + '.css')
      .pipe($.load.csso())
      .pipe($.gulp.dest($.path.styl.build));
  });
  $.gulp.task('js:build', () => {
    return $.gulp.src($.path.js.dest + '/' + $.path.name.js + '.js')
      .pipe($.load.uglifyjs())
      .pipe($.gulp.dest($.path.js.build));
  });
  $.gulp.task('fonts:build', () => {
    return $.gulp.src($.path.fonts.src)
      .pipe($.gulp.dest($.path.fonts.build));
  });
  $.gulp.task('clean:build', (done) => {
    $.del.sync($.path.build, {force: true});
    done();
  });
  $.gulp.task('serve:build', () => {
    $.php7.server({}, () => {
      $.sync.init({
        proxy: $.path.server.build
      });
    });
  });
  $.gulp.task('build', $.gulp.series(
    'clean:build',
    $.gulp.parallel('php:build', 'css:build', 'js:build', 'img:build', 'fonts:build'),
    'serve:build'
  ));
};

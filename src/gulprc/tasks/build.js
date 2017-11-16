module.exports = function(){
  $.gulp.task('php:build', function(){
    return $.gulp.src($.path.php.src)
      .pipe($.gulp.dest($.path.php.build));
  });
  $.gulp.task('css:build', function(){
    return $.gulp.src($.path.styl.dest + '/' + $.path.name.css + '.css')
      .pipe($.gulp.dest($.path.styl.build));
  });
  $.gulp.task('js:build', function(){
    return $.gulp.src($.path.js.dest + '/' + $.path.name.js + '.js')
      .pipe($.gulp.dest($.path.js.build));
  });
  $.gulp.task('fonts:build', function(){
    return $.gulp.src($.path.fonts.src)
      .pipe($.gulp.dest($.path.fonts.build));
  });
  $.gulp.task('clean:build', function(done){
    $.del.sync($.path.build, {force: true});
    done();
  });
  $.gulp.task('serve:build', function(){
    $.php7.server({}, function(){
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

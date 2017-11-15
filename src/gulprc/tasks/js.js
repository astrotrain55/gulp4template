module.exports = function(){
  $.gulp.task('js', function(){
    return $.gulp.src([
      //============== jQuery
      'node_modules/jquery/dist/jquery.min.js',
      //============== Библиотеки
      'node_modules/slick-carousel/slick/slick.min.js',
      //============== Свои скрипты
      'assets/main.js',
      'assets/bem/**/*.js'])
    .pipe($.load.concat('scripts.min.js'))
    .pipe($.gulp.dest('..'))
    .pipe($.sync.reload({
      stream: true
    }));
  });
};

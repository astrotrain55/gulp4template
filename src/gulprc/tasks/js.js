module.exports = function(){
  $.gulp.task('js', function(){
    return $.gulp.src($.path.js.src)
      .pipe($.load.concat($.path.name.js + '.js'))
      .pipe($.gulp.dest($.path.js.dest))
      .pipe($.sync.reload({
        stream: true
    }));
  });
};

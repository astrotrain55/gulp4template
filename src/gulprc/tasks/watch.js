module.exports = function(){
  $.gulp.task('watch', function(){
    $.load.watch('pug/**/*.pug', function(event, cb){
      $.gulp.series('pug');
    });
    $.load.watch('assets/**/*.styl', function(event, cb){
      $.gulp.series('stylus');
    });
    $.load.watch('assets/**/*.js', function(event, cb){
      $.gulp.series('js');
    });
    $.load.watch('../php/*.php', function(event, cb){
      $.sync.reload();
    });
  });
};

module.exports = function(){
  $.gulp.task('serve', function(){
    $.php7.server({}, function(){
      $.sync.init({
        proxy: '127.0.0.1/gulp4/php',
        tunnel: 'sozdavatel'
      });
    });
  });
};

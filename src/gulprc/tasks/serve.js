module.exports = function(){
  $.gulp.task('serve', function(){
    $.php7.server({}, function(){
      $.sync.init({
        proxy: $.path.server.proxy,
        // tunnel: 'sozdavatel',
        // open: 'tunnel',
        // server: {
        //     baseDir: $.path.server.base
        // }
      });
    });
  });
};

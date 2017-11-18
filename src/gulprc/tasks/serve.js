module.exports = () => {
  $.gulp.task('serve', () => {
    $.php7.server({}, () => {
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

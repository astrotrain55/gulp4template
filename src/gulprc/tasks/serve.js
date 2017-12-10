module.exports = () => {
  $.gulp.task('serve', () => {
    $.php7.server({}, () => {
      $.sync.init({
        proxy: path.server.proxy,
        // server: {
        //     baseDir: path.server.base
        // },
        // tunnel: 'sozdavatel',
        // open: 'tunnel'
      });
    });
  });
};

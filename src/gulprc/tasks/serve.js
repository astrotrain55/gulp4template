module.exports = () => {

  $.gulp.task('serve', () => {
    $.sync.init({
      // tunnel: 'gulp4template',
      // open: 'tunnel',
      proxy: path.server.proxy
    });
  });

};

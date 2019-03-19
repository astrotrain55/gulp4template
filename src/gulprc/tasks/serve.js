module.exports = () => {

  $.gulp.task('serve', () => {
    $.sync.init({
      // tunnel: 'gulp4webpack',
      // open: 'tunnel',
      proxy: path.server.proxy
    });
  });

};

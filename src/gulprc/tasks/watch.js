module.exports = () => {
  $.gulp.task('watch', () => {
    $.load.watch($.path.watch.pug, $.gulp.series('pug'));
    $.load.watch($.path.watch.styl, $.gulp.series('stylus'));
    $.load.watch($.path.watch.js, $.gulp.series('js'));
    $.load.watch($.path.watch.sprite, $.gulp.series('sprite'));
  });
};

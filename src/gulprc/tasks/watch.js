module.exports = () => {

  $.gulp.task('watch', () => {
    $.gulp.watch(path.watch.pug, $.gulp.series('pug'));
    $.gulp.watch(path.watch.styl, $.gulp.series('stylus'));
    $.gulp.watch(path.watch.vendor, $.gulp.series('vendor'));
    $.gulp.watch(path.watch.js, $.gulp.series('js'));
    $.gulp.watch(path.watch.sprite, $.gulp.series('sprite'));
    $.gulp.watch(path.watch.svg, $.gulp.series('svg'));
    $.gulp.watch(path.ie.watch, $.gulp.series('ie'));
  });

};

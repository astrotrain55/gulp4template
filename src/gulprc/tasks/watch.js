module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch(path.watch.pug, $.gulp.series('pug'));
    $.gulp.watch(path.watch.content, $.gulp.series('pug'));
    $.gulp.watch(path.watch.styl, $.gulp.series('stylus'));
    $.gulp.watch(path.watch.js, $.gulp.series('js'));
    $.gulp.watch(path.watch.vendorJS, $.gulp.series('vendorJS'));
    $.gulp.watch(path.watch.vendorCSS, $.gulp.series('vendorCSS'));
    $.gulp.watch(path.watch.ie, $.gulp.series('ie'));
    $.gulp.watch(path.watch.sprite, $.gulp.series('sprite'));
    $.gulp.watch(path.watch.svg, $.gulp.series('svg'));
  });
};

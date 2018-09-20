let svg = require('gulp-svg-sprites');

module.exports = () => {

  $.gulp.task('svg', () => {
    return $.gulp.src(path.svg.src)
      .pipe($.load.plumber())
      .on("error", $.load.notify.onError({
        title: 'svg',
        message: "Error: <%= error.message %>"
      }))
      .pipe(svg({
        preview: {
          symbols: 'svg.html'
        },
        mode: "symbols"
      }))
      .pipe($.gulp.dest(path.svg.dest));
  });

};

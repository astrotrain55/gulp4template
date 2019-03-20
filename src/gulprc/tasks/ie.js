const nib  = require('nib'),
      gcmq = require('gulp-group-css-media-queries');


module.exports = () => {

  $.gulp.task('ie', () => {
    return $.gulp.src(path.ie.src)
      .pipe($.load.plumber())
      .pipe($.load.stylus({
        'include css': true,
        import: ['nib'],
        use: nib()
      }))
      .pipe(gcmq())
      .pipe($.load.csscomb())
      .on("error", $.load.notify.onError({
        title: 'IE',
        message: "Error: <%= error.message %>"
      }))
      .pipe($.load.autoprefixer({
        browsers: ['last 3 versions']
      }))
      .pipe($.load.csso())
      .pipe($.gulp.dest(path.ie.dest))
      .pipe($.sync.reload({
        stream: true
      }));
  });

};

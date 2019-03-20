const nib  = require('nib'),
      gcmq = require('gulp-group-css-media-queries');


module.exports = () => {

  $.gulp.task('stylus', () => {
    return $.gulp.src(path.styl.src)
      .pipe($.load.plumber())
      .pipe($.load.sourcemaps.init())
      .pipe($.load.stylus({
        import: ['nib'],
        use: nib()
      }))
      .pipe(gcmq())
      .pipe($.load.csscomb())
      .on("error", $.load.notify.onError({
        title: 'Stylus',
        message: "Error: <%= error.message %>"
      }))
      .pipe($.load.autoprefixer({
        browsers: ['last 3 versions']
      }))
      .pipe($.load.csso())
      .pipe($.load.rename({
        basename: path.name.css
      }))
      .pipe($.load.sourcemaps.write('.'))
      .pipe($.gulp.dest(path.styl.dest))
      .pipe($.sync.reload({
        stream: true
      }));
  });

  $.gulp.task('vendor', () => {
    return $.gulp.src(path.styl.vendor)
      .pipe($.load.plumber())
      .pipe($.load.stylus({
        'include css': true
      }))
      .on("error", $.load.notify.onError({
        title: 'CSS',
        message: "Error: <%= error.message %>"
      }))
      .pipe($.load.rename({
        basename: path.name.vendor
      }))
      .pipe($.gulp.dest(path.styl.dest))
      .pipe($.sync.reload({
        stream: true
      }));
  });

};

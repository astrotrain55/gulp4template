const nib  = require('nib'),
      gcmq = require('gulp-group-css-media-queries');


module.exports = () => {

  $.gulp.task('stylus', () => {
    return $.gulp.src(path.styl.src, { sourcemaps: true })
      .pipe($.load.plumber())
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
      .pipe($.load.autoprefixer())
      .pipe($.load.csso())
      .pipe($.load.rename({
        basename: path.name.css
      }))
      .pipe($.gulp.dest(path.styl.dest, { sourcemaps: '.' }))
      .pipe($.sync.reload({
        stream: true
      }));
  });

  $.gulp.task('vendor', () => {
    return $.gulp.src(path.styl.vendor)
      .pipe($.load.plumber())
      .pipe($.load.stylus({
        'include css': true,
        compress: true,
        rawDefine: { // aliases
          node: path.resolve(__dirname, '..', '..', 'node_modules'),
          vendor: path.resolve(__dirname, '..', '..', 'vendor')
        }
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

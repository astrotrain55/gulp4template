module.exports = () => {
  $.gulp.task('stylus', () => {
    return $.gulp.src(path.styl.src)
      .pipe($.load.plumber())
      .pipe($.load.sourcemaps.init())
      .pipe($.load.stylus({
        import: ['nib'],
        use: $.nib()
      }))
      .pipe($.gcmq())
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

  $.gulp.task('vendorCSS', () => {
    return $.gulp.src(path.styl.vendorCSS)
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

  $.gulp.task('ie', () => {
    return $.gulp.src(path.styl.ie)
      .pipe($.load.plumber())
      .pipe($.load.sourcemaps.init())
      .pipe($.load.stylus({
        'include css': true,
        import: ['nib'],
        use: $.nib()
      }))
      .pipe($.gcmq())
      .pipe($.load.csscomb())
      .on("error", $.load.notify.onError({
        title: 'Stylus',
        message: "Error: <%= error.message %>"
      }))
      .pipe($.load.autoprefixer({
        browsers: ['last 3 versions']
      }))
      .pipe($.load.csso())
      .pipe($.load.sourcemaps.write('.'))
      .pipe($.gulp.dest(path.styl.dest))
      .pipe($.sync.reload({
        stream: true
      }));
  });
};

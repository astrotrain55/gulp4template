module.exports = function(){
  $.gulp.task('stylus', function(){
    return $.gulp.src($.path.styl.src)
    .pipe($.load.plumber())
    .pipe($.load.sourcemaps.init())
    .pipe($.load.stylus({
      use: $.nib(),
      import: ['nib'],
      'include css': true
    }))
    .pipe($.gcmq())
    .pipe($.load.csso())
    .pipe($.load.csscomb())
    .on("error", $.load.notify.onError({
      title: 'Stylus',
      message: "Error: <%= error.message %>"
    }))
    .pipe($.load.autoprefixer({
      browsers: ['last 3 versions']
    }))
    .pipe($.load.sourcemaps.write('.'))
    .pipe($.load.rename({
      basename: $.path.name.css
    }))
    .pipe($.gulp.dest($.path.styl.dest))
    .pipe($.sync.reload({
      stream: true
    }));
  });
};

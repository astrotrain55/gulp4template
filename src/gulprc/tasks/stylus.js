module.exports = function(){
  $.gulp.task('stylus', function(){
    return $.gulp.src('assets/main.styl')
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
      browsers: ['last 10 versions']
    }))
    .pipe($.load.sourcemaps.write('.'))
    .pipe($.load.rename({
      basename: 'template_styles'
    }))
    .pipe($.gulp.dest('..'))
    .pipe($.sync.reload({
      stream: true
    }));
  });
};

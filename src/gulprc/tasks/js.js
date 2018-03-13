module.exports = () => {
  $.gulp.task('js', () => {
    return $.gulp.src(path.js.src)
      .pipe($.load.sourcemaps.init())
      .pipe($.include())
      .pipe($.load.babel({
        "presets": ["env"],
        "minified": true
      }))
      .pipe($.load.concat(path.name.js + '.js'))
      .pipe($.load.sourcemaps.write('.'))
      .pipe($.gulp.dest(path.js.dest))
      .pipe($.sync.reload({
        stream: true
    }));
  });
};

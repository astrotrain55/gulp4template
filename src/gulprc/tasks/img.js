module.exports = () => {
  $.gulp.task('img:build', () => {
    return $.gulp.src(path.img.src)
      .pipe($.load.cache($.load.imagemin([
        $.load.imagemin.svgo({
          plugins: [{removeViewBox: true}]
        }),
        $.load.imagemin.gifsicle({
          interlaced: true
        }),
        $.load.imagemin.jpegtran({
          progressive: true
        }),
        $.load.imagemin.optipng({
          optimizationLevel: 5
        }),
        $.pngquant()
      ])))
      .pipe($.gulp.dest(path.img.dest));
  });
};

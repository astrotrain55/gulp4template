module.exports = () => {
  $.gulp.task('pug', () => {
    return $.gulp.src($.path.pug.src)
    .pipe($.load.plumber())
    .pipe($.load.pug({pretty: true}))
    .on("error", $.load.notify.onError({
      title: 'Pug',
      message: "Error: <%= error.message %>"
    }))
    .pipe($.load.rename({
      extname: '.php'
    }))
    .pipe($.inject.prepend('<?php require_once("_path.inc.php"); ?>\n'))
    .pipe($.gulp.dest($.path.pug.dest))
    .on('end', $.sync.reload);
  });
};

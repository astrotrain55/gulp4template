module.exports = function(){
  $.gulp.task('pug', function(){
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
    .pipe($.inject.prepend('<?php require_once("path.inc.php"); ?>'))
    .pipe($.gulp.dest($.path.pug.dest))
    .on('end', $.sync.reload);
  });
};

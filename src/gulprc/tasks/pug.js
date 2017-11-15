module.exports = function(){
  $.gulp.task('pug', function(){
    return $.gulp.src('pug/pages/*.pug')
    .pipe($.load.plumber())
    .pipe($.load.pug({pretty: true}))
    .on("error", $.load.notify.onError({
      title: 'Pug',
      message: "Error: <%= error.message %>"
    }))
    .pipe($.load.rename({
      extname: '.php'
    }))
    .pipe($.inject.prepend('<?php require_once("../src/path.inc.php"); ?>'))
    .pipe($.gulp.dest('../php'))
    .on('end', $.sync.reload);
  });
};

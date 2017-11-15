module.exports = function(){
  $.gulp.task('cleansprite', function(){
    return $.del.sync('../images/sprite.png');
  });
  $.gulp.task('spritemade', function(){
    var spriteData =
      $.gulp.src('sprite/*.*')
      .pipe($.spritesmith({
        imgName: 'sprite.png',
        cssName: '_sprite.inc.styl',
        padding: 0,
        cssFormat: 'stylus',
        algorithm: 'binary-tree',
        cssTemplate: 'stylus.template.mustache',
        cssVarMap: function(sprite){
          sprite.name = 's-' + sprite.name;
        }
      }));
    spriteData.img.pipe($.gulp.dest('../images/')); // путь, куда сохраняем картинку
    spriteData.css.pipe($.gulp.dest('assets/')); // путь, куда сохраняем стили
  });
  $.gulp.task('sprite', ['cleansprite', 'spritemade']);
};

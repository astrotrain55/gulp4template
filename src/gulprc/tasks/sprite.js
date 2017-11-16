module.exports = function(){
  $.gulp.task('cleansprite', function(done){
    $.del.sync($.path.sprite.del, {force: true});
    done();
  });
  $.gulp.task('spritemade', function(done){
    var spriteData =
      $.gulp.src($.path.watch.sprite)
      .pipe($.spritesmith({
        imgName: $.path.name.sprite_png + '.png',
        cssName: $.path.name.sprite_styl + '.styl',
        padding: 0,
        cssFormat: 'stylus',
        algorithm: 'binary-tree',
        cssTemplate: 'stylus.template.mustache',
        cssVarMap: function(sprite){
          sprite.name = 's-' + sprite.name;
        }
      }));
    spriteData.img.pipe($.gulp.dest($.path.sprite.png)); // путь, куда сохраняем картинку
    spriteData.css.pipe($.gulp.dest($.path.sprite.styl)); // путь, куда сохраняем стили
    done();
  });
  $.gulp.task('sprite', $.gulp.series('cleansprite','spritemade'));
};

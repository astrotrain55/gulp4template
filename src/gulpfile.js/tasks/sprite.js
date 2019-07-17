const { src, dest } = require('gulp');
const spritesmith = require('gulp.spritesmith');

const del = require('del');
const route = require('../routes');


module.exports = function sprite(done) {
  del.sync(route.sprite.del, {force: true});

  const spriteData = src(route.watch.sprite)
    .pipe(spritesmith({
      imgName: route.name.sprite_png + '.png',
      cssName: route.name.sprite_styl + '.styl',
      padding: 0,
      cssFormat: 'stylus',
      algorithm: 'binary-tree',
      cssTemplate: 'stylus.template.mustache',
      cssVarMap: (sprite) => {
        sprite.name = 's-' + sprite.name;
      }
    }));

  spriteData.img.pipe(dest(route.sprite.png)); // путь, куда сохраняем картинку
  spriteData.css.pipe(dest(route.sprite.styl)); // путь, куда сохраняем стили

  done();
}

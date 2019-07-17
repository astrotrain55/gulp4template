const { src, dest } = require('gulp');
const sprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');

const del = require('del');
const route = require('../routes');


module.exports = function svg() {
  del.sync(route.svg.del, {force: true});

  return src(route.svg.src)
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(cheerio({
      run: $ => {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
        $('style').remove();
      },
      parserOptions: {xmlMode: true}
    }))
    .pipe(replace('&gt;', '>')) // профилактика после cheerio
    .pipe(sprite({
      mode: {
        symbol: { // подкаталог в dest
          svg: {
            rootAttributes: {
              id: 'svg-sprite'
            },
            xmlDeclaration: false // убирает <?xml version="1.0" encoding="utf-8"?>
          },
          sprite: '../images/svg/symbols.svg', // относительно подкаталога
          render: {
            styl: {
              dest: '../src/app-stylus/_svg.inc.styl', // относительно подкаталога
              template: 'svg-sprite.template.styl' // относительно gulpfile
            }
          },
          example: {
            dest: '../svg-sprite.example.html', // относительно подкаталога
            template: 'svg-sprite.template.html' // относительно gulpfile
          }
        }
      }
    }))
    .pipe(dest(route.svg.dest));
};

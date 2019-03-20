    const svg = require('gulp-svg-sprite'),
cheerioGlobal = require('gulp-cheerio');


module.exports = () => {

  $.gulp.task('svg', () => {
    return $.gulp.src(path.svg.src)
      .pipe($.load.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe(cheerioGlobal({
        run: $ => {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
          $('style').remove();
        },
        parserOptions: {xmlMode: true}
      }))
      // профилактика после cheerio
      .pipe($.load.replace('&gt;', '>'))
      .pipe(svg({
        mode: {
          symbol: { // подкаталог в dest
            svg: {
              rootAttributes: {
                id: "svg-sprite"
              },
              xmlDeclaration: false // убирает <?xml version="1.0" encoding="utf-8"?>
            },
            sprite: "../images/svg/symbols.svg", // относительно подкаталога
            render: {
              styl: {
                dest: '../src/app-stylus/_svg.inc.styl', // относительно подкаталога
                template: "svg-sprite.template.styl" // относительно gulpfile
              }
            },
            example: {
              dest: '../svg-sprite.example.html', // относительно подкаталога
              template: "svg-sprite.template.html" // относительно gulpfile
            }
          }
        }
      }))
      .pipe($.gulp.dest(path.svg.dest));
  });

};

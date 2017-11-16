global.$ = {
  gulp: require('gulp'),
  load: require('gulp-load-plugins')(),

  php7: require('gulp-connect-php7'),
  gcmq: require('gulp-group-css-media-queries'),
  inject: require('gulp-inject-string'),
  spritesmith: require("gulp.spritesmith"),

  del: require('del'),
  nib: require('nib'),
  sync: require('browser-sync').create(),
  pngquant: require('imagemin-pngquant'),

  path: {
    tasks: require('./gulprc/tasks.js'),
    server: {
      base: './php/',
      proxy: '127.0.0.1/gulp4template/php/',
      build: 'localhost/gulp4template/dist/php/',
    },
    watch: {
      js: 'assets/**/*.js',
      pug: 'pug/**/*.pug',
      styl: 'assets/**/*.styl',
      sprite: 'sprite/**/*.*'
    },
    pug: {
      src: 'pug/pages/*.pug',
      dest: '../php'
    },
    php: {
      src: '../php/*.php',
      build: '../dist/php/'
    },
    styl: {
      src: 'assets/main.styl',
      dest: '..',
      build: '../dist/'
    },
    img: {
      src: '../images/**/*',
      dest: '../dist/images'
    },
    fonts: {
      src: '../fonts/**/*.*',
      build: '../dist/fonts/'
    },
    js: {
      src: [
        //============== jQuery
        'node_modules/jquery/dist/jquery.min.js',
        //============== Библиотеки
        // 'node_modules/jquery-validation/dist/jquery.validate.min.js',
        // 'node_modules/jquery-mask-plugin/dist/jquery.mask.min.js',
        // 'node_modules/select2/dist/js/select2.min.js',
        // 'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
        // 'node_modules/bxslider/dist/jquery.bxslider.min.js',
        // 'node_modules/slick-carousel/slick/slick.min.js',
        // 'node_modules/wow.js/dist/wow.min.js',
        //============== Свои скрипты
        'assets/main.js',
        'assets/bem/**/*.js'],
      dest: '..',
      build: '../dist/'
    },
    sprite: {
      del: '../images/sprite.png',
      png: '../images/',
      styl: 'assets/'
    },
    name: {
      js: 'scripts.min',
      css: 'template_styles',
      sprite_png: 'sprite',
      sprite_styl: '_sprite.inc'
    },
    build: '../dist/'
  }
};

$.path.tasks.forEach(function(taskPath){
  require(taskPath)();
});

$.gulp.task('clear_cache', function(){
  return $.load.cache.clearAll();
});

$.gulp.task('default', $.gulp.series(
  $.gulp.parallel('clear_cache', 'pug', 'stylus', 'js'),
  $.gulp.parallel('serve', 'watch')
));

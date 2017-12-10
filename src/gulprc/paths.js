global.path = {
  server: {
    base: './php/',
    proxy: '127.0.0.1/gulp4template/php/',
    build: 'localhost/gulp4template/dist/php/',
  },
  watch: {
    js: 'assets/**/*.js',
    pug: 'pug/**/*.*',
    styl: 'assets/**/*.styl',
    svg: 'svg/**/*.svg',
    sprite: 'sprite/**/*.*'
  },
  pug: {
    src: 'pug/pages/*.pug',
    dest: '../php/'
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
    dest: '../dist/images/'
  },
  fonts: {
    src: '../fonts/**/*.*',
    build: '../dist/fonts/'
  },
  js: {
    src: ['assets/_libs.inc.js',
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
  svg: {
    src: 'svg/**/*.svg',
    dest: '../images',
  },
  name: {
    js: 'scripts.min',
    css: 'template_styles',
    sprite_png: 'sprite',
    sprite_styl: '_sprite.inc'
  },
  build: '../dist/'
}

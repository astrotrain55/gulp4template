global.path = {
  server: {
    base: './php/',
    proxy: '127.0.0.1/gulp4template/php/'
  },
  watch: {
    js: 'assets/**/*.js',
    pug: 'pug/**/*.*',
    styl: 'assets/**/*.styl',
    svg: 'svg/**/*.svg',
    sprite: 'sprite/**/*.*',
    content: 'data/**/*.json'
  },
  pug: {
    src: 'pug/pages/*.pug',
    dest: '../php/'
  },
  php: {
    src: '../php/*.php'
  },
  styl: {
    src: 'assets/main.styl',
    dest: '..'
  },
  js: {
    src: ['assets/_libs.inc.js',
          'assets/main.js',
          'assets/bem/**/*.js'],
    dest: '..'
  },
  img: {
    src: '../images/**/*',
    dest: '../i/'
  },
  fonts: {
    src: '../fonts/**/*.*'
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
  }
}

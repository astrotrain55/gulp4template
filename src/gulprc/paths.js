global.path = {

  server: {
    proxy: '127.0.0.1/gulp4template/php/'
  },

  watch: {
    pug: [
      'pug/**/*.pug',
      'assets/bem/**/*.pug',
      'data/**/*.json'
    ],
    styl: [
      'assets/**/*.styl',
      '!assets/+(libs|ie).styl'
    ],
    js: 'assets/**/*.js',
    vendor: 'assets/libs.styl',
    ie: 'assets/ie.styl',
    svg: 'svg/**/*.svg',
    sprite: 'sprite/**/*.*'
  },

  pug: {
    src: 'pug/pages/*.pug',
    dest: '../php/'
  },

  styl: {
    src: 'assets/main.styl',
    vendor: 'assets/libs.styl',
    ie: 'assets/ie.styl',
    dest: '..'
  },

  js: {
    src: [
      'assets/bem/**/*.js',
      'assets/main.js'
    ],
    dest: '..'
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
    css: 'template_styles',
    js: 'scripts.min',
    vendor: 'vendor.min',
    sprite_png: 'sprite',
    sprite_styl: '_sprite.inc'
  }

}

global.path = {
  server: {
    proxy: '127.0.0.1/gulp4template/php/'
  },
  watch: {
    pug: [
      'pug/**/*.pug',
      'assets/bem/**/*.pug'
    ],
    styl: ['assets/**/*.styl',
          '!assets/+(libs|ie).styl'],
    ie: 'assets/ie.styl',
    js: ['assets/main.js',
          'assets/bem/**/*.js'],
    vendorJS: 'assets/libs.js',
    vendorCSS: 'assets/libs.styl',
    content: 'data/**/*.json',
    svg: 'svg/**/*.svg',
    sprite: 'sprite/**/*.*'
  },
  pug: {
    src: 'pug/pages/*.pug',
    dest: '../php/'
  },
  styl: {
    src: 'assets/main.styl',
    vendorCSS: 'assets/libs.styl',
    ie: 'assets/ie.styl',
    dest: '..'
  },
  js: {
    vendorJS: 'assets/libs.js',
    src: ['assets/main.js',
          'assets/bem/**/*.js'],
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

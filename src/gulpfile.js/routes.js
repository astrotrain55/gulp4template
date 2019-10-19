const nameProject = require('./getNameProject')();

module.exports = {
  grid: {
    settings: '../smartgrid.settings',
    watch: 'smartgrid.settings.js',
    output: 'app-stylus'
  },

  server: {
    proxy: `127.0.0.1/${ nameProject }/php/`
  },

  watch: {
    pug: [
      'app-components/**/*.tpl',
      'app-components/**/*.pug',
      'app-pug/**/*.pug',
      'data/**/*.json'
    ],
    styl: [
      'app-components/**/*.styl',
      'app-stylus/**/*.styl',
      '!app-stylus/libs.styl'
    ],
    js: [
      'app-js/**/*.js',
      'app-components/**/*.js'
    ],
    vendor: 'app-stylus/libs.styl',
    svg: 'svg/**/*.svg',
    sprite: 'sprite/**/*.*'
  },

  pug: {
    src: 'app-pug/pages/*.pug',
    dest: '../php/'
  },

  styl: {
    src: 'app-stylus/main.styl',
    vendor: 'app-stylus/libs.styl',
    dest: '..'
  },

  js: {
    src: 'app-js/main.js',
    dest: '..'
  },

  sprite: {
    del: '../images/sprite.png',
    png: '../images/',
    styl: 'app-stylus/'
  },

  svg: {
    del: '../images/svg/symbols.svg',
    src: 'svg/**/*.svg',
    dest: '../'
  },

  name: {
    css: 'template_styles',
    js: 'scripts.min',
    vendor: 'vendor.min',
    sprite_png: 'sprite',
    sprite_styl: '_sprite.inc'
  },
};

const getNameProject = require('./getNameProject');


global.path = {

  server: {
    proxy: `127.0.0.1/${ getNameProject() }/php/`
  },

  watch: {
    pug: [
      'app-components/**/*.pug',
      'app-pug/**/*.pug',
      'data/**/*.json'
    ],
    styl: [
      'app-components/**/*.styl',
      'app-stylus/**/*.styl',
      '!app-stylus/+(libs|ie).styl'
    ],
    js: 'app-js/**/*.js',
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

  ie: {
    watch: 'app-stylus/ie.styl',
    src: 'app-stylus/ie.styl',
    dest: '../ie/'
  }

}

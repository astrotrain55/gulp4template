const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const notify = require('gulp-notify');
const rename = require('gulp-rename');

const fs = require('fs');
const route = require('../routes');


module.exports = function php() {
  return src(route.pug.src)
    .pipe(plumber())
    .pipe(pug({
      locals: {
        menu: JSON.parse(fs.readFileSync('data/menu.json', 'utf8')),
        content: JSON.parse(fs.readFileSync('data/content.json', 'utf8'))
      },
      pretty: true
    }))
    .on('error', notify.onError({
      title: 'Pug',
      message: 'Error: <%= error.message %>'
    }))
    .pipe(rename({
      extname: '.php'
    }))
    .pipe(dest(route.pug.dest))
    .on('end', $.sync.reload);
};

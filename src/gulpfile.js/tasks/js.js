const { src, dest } = require('gulp');
const stream = require('webpack-stream');
const webpack = require('webpack');
const route = require('../routes');
const config = require('../../webpack.config.js');

module.exports = function js() {
  return src(route.js.src)
    .pipe(stream(config, webpack))
    .pipe(dest(route.js.dest))
    .pipe($.sync.reload({
      stream: true,
    }));
};

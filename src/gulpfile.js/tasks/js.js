const stream = require('webpack-stream');
const webpack = require('webpack');
const config = require('../../webpack.config.js');


module.exports = () => {

  $.gulp.task('js', () => {
    return $.gulp.src(path.js.src)
      .pipe(stream(config, webpack))
      .pipe($.gulp.dest(path.js.dest))
      .pipe($.sync.reload({
        stream: true,
    }));
  });

};

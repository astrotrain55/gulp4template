let stream = require('webpack-stream'),
    webpack = require('webpack');

module.exports = () => {

  $.gulp.task('js', () => {
    return $.gulp.src(path.js.src)
      .pipe(stream({
        output: {
          filename: 'scripts.min.js',
        },

        mode: 'development',

        devtool: 'inline-source-map',

        module: {
          rules: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /(node_modules|vendor)/,
              query: {
                presets: ['env']
              }
            }
          ]
        },

        externals: {
          jquery: 'jQuery'
        }

        plugins: [
          new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
          })
        ]

      }))
      .pipe($.gulp.dest(path.js.dest))
      .pipe($.sync.reload({
        stream: true
    }));
  });

};

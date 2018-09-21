let stream = require('webpack-stream'),
    webpack = require('webpack');

module.exports = () => {

  $.gulp.task('js', () => {
    return $.gulp.src(path.js.src)
      .pipe(stream({
        output: {
          chunkFilename: 'scripts.min.js',
          filename: '[name].min.js'
        },

        optimization: {
          runtimeChunk: {
            name: 'vendor'
          },
          splitChunks: {
            cacheGroups: {
              commons: {
                name: 'vendor',
                chunks: 'all',
                test: /node_modules/
              }
            }
          }
        },

        mode: 'development',

        devtool: 'source-map',

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

        // externals: {
        //   jquery: 'jQuery'
        // },

        plugins: [
          new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Mustache: 'mustache'
          })
        ]

      }, webpack))
      .pipe($.gulp.dest(path.js.dest))
      .pipe($.sync.reload({
        stream: true
    }));
  });

};

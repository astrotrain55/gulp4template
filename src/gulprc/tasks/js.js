const stream = require('webpack-stream'),
     webpack = require('webpack'),
        Path = require('path');

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
                presets: ['@babel/preset-env']
              }
            },
            {
              test: require.resolve('jquery'),
              use: [{
                loader: 'expose-loader',
                options: 'jQuery'
              },
              {
                loader: 'expose-loader',
                options: '$'
              }]
            },
            {
              test: /\.js$/,
              enforce: 'pre',
              exclude: /(node_modules|vendor)/,
              use: [{
                loader: 'jshint-loader',
                query: {
                  undef: true,
                  unused: true,
                  jquery: true,
                  camelcase: true,
                  emitErrors: false,
                  failOnHint: false,
                  esversion: 6,
                  globals: ['window', 'document', 'console', 'Mustache']
                }
              }]
            }
          ]
        },

        resolve: {
          alias: {
            root: Path.resolve(__dirname, '..', '..', 'app-js'),
            components: Path.resolve(__dirname, '..', '..', 'app-components')
          }
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

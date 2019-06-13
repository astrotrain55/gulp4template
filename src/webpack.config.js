const webpack = require('webpack');
const path = require('path');


module.exports = {
  output: {
    chunkFilename: 'scripts.min.js',
    filename: '[name].min.js',
  },

  optimization: {
    runtimeChunk: {
      name: 'vendor',
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vendor',
          chunks: 'all',
          test: /node_modules/,
        },
      },
    },
  },

  mode: 'production',

  devtool: 'source-map',

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules|vendor)/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|vendor)/,
        loader: 'babel-loader',
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery',
        },
        {
          loader: 'expose-loader',
          options: '$',
        }],
      },
    ],
  },

  resolve: {
    alias: {
      libs: path.resolve(__dirname, 'app-js', 'libs'),
      store: path.resolve(__dirname, 'app-js', 'store'),
      root: path.resolve(__dirname, 'app-js'),
      components: path.resolve(__dirname, 'app-components'),
      vendor: path.resolve(__dirname, 'vendor'),
    },
  },

  externals: {
    jquery: 'jQuery',
  },

  node: {
    fs: 'empty',
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],

};

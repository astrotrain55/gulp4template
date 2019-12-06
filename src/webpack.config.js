const { ProvidePlugin } = require('webpack');
const { resolve } = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
      libs: resolve(__dirname, 'app-js', 'libs'),
      common: resolve(__dirname, 'app-js', 'common'),
      root: resolve(__dirname, 'app-js'),
      components: resolve(__dirname, 'app-components'),
      vendor: resolve(__dirname, 'vendor'),
    },
  },

  externals: {
    jquery: 'jQuery',
  },

  node: {
    fs: 'empty',
  },

  plugins: [
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      _: [resolve(__dirname, 'app-js', 'global', 'lodash.js'), 'default'],
      ev: [resolve(__dirname, 'app-js', 'global', 'events.js'), 'default'],
    }),
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /a\.vendor|node_modules/,
      // add errors to webpack instead of warnings
      failOnError: true,
      // set the current working directory for displaying module paths
      cwd: process.cwd()
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    }),
  ],
};

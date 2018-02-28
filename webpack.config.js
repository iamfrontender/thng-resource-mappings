'use strict';

const webpack = require('webpack');

module.exports = {
  entry: __dirname + '/index.js',
  output: {
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        },
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
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
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
var webpackMerge = require('webpack-merge');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'inline-source-map',

  output: {
    path: helpers.root('dist'),
    //publicPath: 'http://localhost:8080/',
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },

  plugins: [
    //new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
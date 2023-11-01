const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js',
    menu: './src/js/menu.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/public'
  },
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/css', to: 'css' },
        { from: 'src/img', to: 'img' },
        { from: 'src/js', to: 'js' }
      ]
    })
  ]
}
const path = require('path');
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
        { from: 'src/index.html', to: 'index.html'},
        { from: 'src/about.html', to: 'about.html' },
        { from: 'src/contact.html', to: 'contact.html' },
        { from: 'src/css', to: 'css' },
        { from: 'src/img', to: 'img' },
        { from: 'src/js', to: 'js' }
      ]
    })
  ]
}
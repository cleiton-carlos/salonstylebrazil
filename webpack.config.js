const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js',
    menu: './src/js/menu.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new CopyPlugin({
      patterns:[
        {
          from: path.resolve(__dirname,'src/about.html'),
          to: path.resolve(__dirname,'dist')
        }
      ]
    })
  ]
}
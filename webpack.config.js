const path = require('path');

module.exports = {
  entry: ['./src/js/index.js','./src/js/menu.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
};
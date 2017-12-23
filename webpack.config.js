// imports
var path = require('path');

module.exports = {
  // "main" file that includes all other modules
  entry: './src/main.js',
  // where compiled file goes
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },

  module: {
    // special compilation rules
    loaders: [
      // run vue files through vue-loader
      { test: /\.vue$/, loader: 'vue-loader' },
      // run js files through babel, excluding node modules
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    ]
  },

  // make sure you get the standalone build (can't compile w runtime build)
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
};

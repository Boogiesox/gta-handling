const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    './src/js/app.js'
  ],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?|.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
        // Copy static assets to prod
        { from: './src/assets', to: 'assets' },
    ])
  ]
};

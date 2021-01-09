const path = require('path');
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: "development",
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
    rules: [
      {
        test: /\.jsx?|.js?$/,
        loader: 'babel-loader',
        exclude: [
          /node_modules/
        ]
      },
    ]
  },
  optimization: {
    minimizer: [new UglifyWebpackPlugin({ sourceMap: true })]
  }
};

const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, './script.js')
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].bunde.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
      inject: false
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './css/*.css',
          to: '.'
        },
      ],
    })
  ],
  devServer: {
    contentBase: __dirname + "/build/",
  }
}
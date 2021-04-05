const path = require('path')
const webpack = require('webpack') 
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, './index.js')
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].bunde.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
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
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: __dirname + "/build/",
    hot: true,
  }
}
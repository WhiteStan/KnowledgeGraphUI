const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

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
      template: path.resolve(__dirname, "./index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    contentBase: __dirname + "/build/",
  }
}
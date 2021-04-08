const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')


module.exports = {
  mode: 'development',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', {runtime: 'automatic'}],
          'react-refresh/babel',
        ],
      },
    }],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
  devServer: {
    hotOnly: true,
  },
}

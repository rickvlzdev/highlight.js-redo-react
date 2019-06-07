/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const { EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = env => (merge.smart({
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader'],
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
  ],
}, common(env)));

/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

module.exports = () => ({
  context: path.resolve(__dirname, '..'),
  resolve: {
    mainFiles: ['index', 'index.js', 'index.jsx'],
    alias: {
      '#components': path.resolve(__dirname, '../src/App/components'),
      '#images': path.resolve(__dirname, '../src/App/images'),
      '#pages': path.resolve(__dirname, '../src/App/pages'),
      '#styles': path.resolve(__dirname, '../src/App/styles/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[folder]_[name]_[hash:base64]',
            },
          },
          {
            loader: 'less-loader',
          },
        ],
      },
    ],
  },
});

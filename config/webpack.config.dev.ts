/**
 * @author: zxs
 * @date: 2020/7/28
 */
const webpack = require('webpack');

const path = require('path');

module.exports = {
  entry: {
    index: './index.ts'
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[chunkhash].js'
  }
};

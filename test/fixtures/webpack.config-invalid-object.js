const path = require('path');

const TimeFixPlugin = require('time-fix-plugin');

module.exports = {
  resolve: {
    alias: {
      'webpack-hot-client/client': path.resolve(__dirname, '../../client')
    }
  },
  context: __dirname,
  devtool: 'source-map',
  entry: { index: './app.js' },
  // mode: 'development',
  output: {
    filename: './output.js',
    path: path.resolve(__dirname)
  },
  optimization: {
    moduleIds: 'deterministic'
  },
  plugins: [new TimeFixPlugin()]
};

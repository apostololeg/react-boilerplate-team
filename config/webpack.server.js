const commonConfig = require('./webpack.common');
const { buildPath } = require('./tools/paths');
const { HOST, PORT } = require('./tools/constants');

module.exports = {
  ...commonConfig,

  devServer: {
    contentBase: buildPath,
    compress: true,
    historyApiFallback: true,
    open: false,
    host: HOST,
    port: PORT,
    stats: 'errors-only'
  },

  devtool: 'inline-source-map'
};

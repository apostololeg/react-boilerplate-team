const commonConfig = require('./webpack.common');

module.exports = {
  ...commonConfig,

  devtool: 'inline-source-map'
};

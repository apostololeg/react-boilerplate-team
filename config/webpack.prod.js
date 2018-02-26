const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const commonConfig = require('./webpack.common');
const { APP_TITLE } = require('./tools/constants');

module.exports = {
  ...commonConfig,

  entry: {
    polyfill: [
      'babel-polyfill',
      'whatwg-fetch'
    ],
    vendor: [
      'react',
      'react-dom',
      'prop-types',
      'decko'
    ],
    ...commonConfig.entry
  },

  plugins: [
    ...commonConfig.plugins,

    new webpack.optimize.CommonsChunkPlugin({
      names: [
        'vendor',
        'polyfill'
      ],
      minChunks: Infinity
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    }),

    new ManifestPlugin({
      seed: {
        name: APP_TITLE
      }
    })
  ]
};

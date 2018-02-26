const { NODE_ENV } = require('./tools/constants');

module.exports = {
  exec: true,
  parser: require('sugarss'),
  sourceMap: (NODE_ENV === 'production' ? false : 'inline'),
  plugins: [
    require('postcss-import')(),
    require('postcss-modules-values')(),
    (NODE_ENV === 'production') && require('cssnano')({
      autoprefixer: true,
      preset: ['default', {
        discardComments: {
          removeAll: true
        }
      }]
    })
  ]
};

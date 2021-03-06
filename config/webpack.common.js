const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { readdirSync, existsSync } = require('fs');

const {
  NODE_ENV,
  USE_HTML,
  USE_MANY_ENTRIES,
  USE_CSS_MODULES
} = require('./tools/constants');

const {
  projectPath,
  modulesPath,
  buildPath,
  rootPath,
  entriesPath
} = require('./tools/paths');

// const entries = require('./tools/entries-list');

// Castomize plugins
const variablePlugins = [];

if (USE_HTML) {
  const { APP_TITLE, PAGE_LANG } = require('./tools/constants');
  const { assetsPath } = require('./tools/paths');

  variablePlugins.push(
    new HtmlWebpackPlugin({
      lang: PAGE_LANG,
      title: `${NODE_ENV !== 'production' ? `(dev) ${APP_TITLE}` : `${APP_TITLE}`}`,
      filename: 'index.html',
      favicon: `${assetsPath}/favicon.png`,
      template: `${assetsPath}/index.html`,
      chunksSortMode: 'dependency',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  );
}

const cssOptions = () => {
  let options = {};

  if (USE_CSS_MODULES) {
    options = {
      modules: true,
      localIdentName: '[name]__[local]___[hash:base64:5]'
    }
  }

  return options;
}

const entryOptions = () => {
  const entries = {};
  const defaultEntries = {
    app: `${projectPath}/index.js`
  }

  if (!USE_MANY_ENTRIES) {
    return defaultEntries;
  }

  console.log('entriesPath ----------------- ', entriesPath)
  if (existsSync(entriesPath)) {
    readdirSync(entriesPath).forEach(file => {
      let [name, ext] = file.split('.')

      if (ext === 'js') {
        entries[name] = `${entriesPath}/${file}`
      }
    })
  }

  console.log(entries)

  return Object.keys(entries).length === 0
    ? defaultEntries
    : entries;
}

module.exports = {
  entry: entryOptions(),

  output: {
    path: buildPath,
    filename: 'js/[name].js'
  },

  resolve: {
    modules: [
      projectPath,
      modulesPath,
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.json', '.styl']
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: cssOptions()
            }
          ]
        })
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: cssOptions()
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: rootPath + '/config/postcss.config.js'
                }
              }
            },
            {
              loader: 'stylus-loader',
              options: {
                sourceMap: false
              }
            }
          ]
        })
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        include: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['build'], {
      root: rootPath
    }),

    ...variablePlugins,

    new ExtractTextPlugin({
      filename: 'css/[name].css'
    })
  ]
};

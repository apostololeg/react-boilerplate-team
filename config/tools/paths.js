const path = require('path');

const {
  APP_PATH,
  BUILD_PATH,
  SOURCE_PATH,
  ASSETS_PATH
} = require('./constants');

function resolvePath(relativePath) {
  return path.resolve(APP_PATH, relativePath);
}

module.exports = {
  rootPath:    APP_PATH,
  projectPath: resolvePath(SOURCE_PATH),
  modulesPath: resolvePath('node_modules'),
  buildPath:   resolvePath(BUILD_PATH),
  assetsPath:  resolvePath(ASSETS_PATH)
};

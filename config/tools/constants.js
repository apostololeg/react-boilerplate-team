const { parsed: env } = require('dotenv').config();
const fs = require('fs');

// Node ENV ("production", "development", etc.)
const NODE_ENV = process.env.NODE_ENV;

// Flag determining whether to use html
const USE_HTML = env.USE_HTML || true;

// Application title
const APP_TITLE = env.APP_TITLE || 'React boilerplate';

// Application root folder path
const APP_PATH = fs.realpathSync(process.cwd());

// Application build folder path
const BUILD_PATH = env.BUILD_PATH || 'build';

// Application source folder path
const SOURCE_PATH = env.SOURCE_PATH || 'src';

// Application media folder path
const ASSETS_PATH = env.ASSETS_PATH || 'src/assets';

// Application's page language
const PAGE_LANG = env.PAGE_LANG || 'en';

// The flag that determines whether to use the css modules
const USE_CSS_MODULES = env.USE_CSS_MODULES || false;

// App entries
const USE_MANY_ENTRIES = env.USE_MANY_ENTRIES === 'true';

/**
 * Application server options
 */
const HOST = env.HOST || 'localhost';
const PORT = env.PORT || 9000;

console.log(env);

module.exports = {
  NODE_ENV,
  USE_HTML,
  APP_TITLE,
  APP_PATH,
  BUILD_PATH,
  SOURCE_PATH,
  ASSETS_PATH,
  USE_CSS_MODULES,
  USE_MANY_ENTRIES,
  ENTRIES_LIST,
  PAGE_LANG,
  HOST,
  PORT
};

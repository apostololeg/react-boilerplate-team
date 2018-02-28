const { readdirSync, existsSync } = require('fs');
const { entriesPath } = require('./paths');

let entries = {};

if ( existsSync(entriesPath) ) {
  readdirSync(entriesPath).forEach(file => {
    let [ name, ext ] = file.slit('.');

    if (ext === 'js' || ext === 'jsx') {
      entries[name] = file;
    }
  });
}

module.exports = entries;

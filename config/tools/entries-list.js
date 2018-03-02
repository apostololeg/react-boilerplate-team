const { readdirSync, existsSync } = require('fs');
const { entriesPath } = require('./paths');

let entries = {};

if ( existsSync(entriesPath) ) {
  readdirSync(entriesPath).forEach(file => {
    let [ name, ext ] = file.split('.');

    if (ext === 'js' || ext === 'jsx') {
      entries[name] = `${entriesPath}/${file}`;
    }
  });
}

module.exports = entries;

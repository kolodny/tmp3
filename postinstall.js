var fs = require('fs');
var path = require('path');
const root = process.cwd();

var link = root + '/node_modules/~/~';
try {
  path.resolve(fs.realpathSync(link));
} catch (e) {
  fs.symlinkSync(root, link);
  process.exit(0);
}

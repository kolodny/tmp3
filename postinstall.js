var fs = require('fs');
var path = require('path');
const root = process.cwd();

var link = root + '/node_modules/~/~';
console.log(link);
try {
  path.resolve(fs.realpathSync(link));
} catch (e) {
  console.log({root, link})
  fs.symlinkSync(root, link);
  process.exit(0);
}

var fs = require('fs');
var path = require('path');
const root = process.cwd();
const exec = require('child_process').exec;

exec('rm -rf ' + __dirname, () => {
  exec('ln -s . ' + __dirname);
});



console.log(__dirname);

fs.unlinkSync

// var link = root + '/~';
// console.log(link);
// try {
//   path.resolve(fs.realpathSync(link));
// } catch (e) {
//   console.log({root, link})
//   fs.symlinkSync(root, link);
//   process.exit(0);
// }

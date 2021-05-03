const glob = require('glob');

const fileUtil = () => {
  return new Promise(function(resolve) {
    glob('node_modules/**/README.md', function (err, matches) {
      if(err) {
        resolve(err);
      }
      resolve(matches);
    });
  })
}

module.exports = fileUtil;
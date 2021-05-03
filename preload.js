const { contextBridge } = require('electron');
const glob = require('glob');
const fileUtil = require('./lib/fileUtil');

contextBridge.exposeInMainWorld(
  "api", {
    file: (callBack) => {
      glob('node_modules/**/README.md', function (err, matches) {
        if(err) {
          callBack(err, null);
          return;
        }
        callBack(null, matches);
      });
    },
    fileTwo: async() => {
      await fileUtil();
    }
  },
);
const { contextBridge } = require('electron');
const fileUtil = require('./lib/fileUtil');

contextBridge.exposeInMainWorld(
  "api", {
    fileTwo: fileUtil
  },
);
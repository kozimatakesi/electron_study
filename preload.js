const { contextBridge } = require('electron');
const glob = require('glob');
const fileUtil = require('./lib/fileUtil');

contextBridge.exposeInMainWorld(
  "api", {
    fileTwo: fileUtil
  },
);
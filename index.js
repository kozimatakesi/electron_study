'use strict';

window.api.file((err, matchs) => {
  if(!err) document.body.insertAdjacentHTML('beforeend', matchs.join());
});
'use strict';

/* window.api.file((err, matchs) => {
  if(!err) document.body.insertAdjacentHTML('beforeend', matchs.join());
});
 */

(async() => {
  const result = await window.api.fileTwo();
  await document.body.insertAdjacentHTML('beforeend', result);
})();

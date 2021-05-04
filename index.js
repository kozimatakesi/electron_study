'use strict';

const displayReadme = async() => {
  const result = await window.api.fileTwo();
  await document.body.insertAdjacentHTML('beforeend', result);
}

displayReadme();

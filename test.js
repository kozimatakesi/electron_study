const fileUtil = require("./lib/fileUtil")
const glob = async() => {
  console.log('最初');
  const result = await fileUtil();
  console.log(result);
  console.log('最後');
};

glob();

/* function myPromise(num) {
  return new Promise(function(resolve) {
    setTimeout(function() { resolve(num * num) }, 3000)
  })
}

async function myAsync() {
  const result = await myPromise(10);
  console.log(result);
  console.log('でたね');
}

myAsync(); */
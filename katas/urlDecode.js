const urlDecode = function(text) {
  let obj = {};
  let arr = text.split('&');

  for (let i = 0; i < arr.length; i++) {
    let keyValueArr = arr[i].split('=');
    let valueArr = keyValueArr[1].split('%20');
    obj[keyValueArr[0]] = '';
    valueArr.forEach((word) => obj[keyValueArr[0]] += `${word} `);
    obj[keyValueArr[0]] = obj[keyValueArr[0]].slice(0, -1);
  }

  return obj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

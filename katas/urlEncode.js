const urlEncode = function(text) {
  let arr = text.trim().split(" ");
  let url = '';
  for (let i = 0; i < arr.length; i++) {
    url += arr[i]
    if (i !== arr.length - 1) { url += '%20' }
  }
  return url;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

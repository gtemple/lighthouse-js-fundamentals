const camelCase = function(input) {
  let arr = input.split(' ');
  let result = arr[0].toLowerCase();

  let i = 1;
  while (i < arr.length) {
    let word = arr[i][0].toUpperCase() + arr[i].slice(1);
    result += word;
    i++;
  }

  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

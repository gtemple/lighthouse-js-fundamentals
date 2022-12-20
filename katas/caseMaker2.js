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

const pascal = function(input) {
  let arr = input.split(' ');
  let result = '';

  let i = 0;
  while (i < arr.length) {
    let word = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    result += word;
    i++;
  }
  return result;
}

const snake = function(input) {
  let arr = input.toLowerCase().split(' ');
  return arr.join('_')
}

const kebab = function(input) {
  let arr = input.toLowerCase().split(' ');
  return arr.join('-')
}

const title = function(input) {
  let arr = input.split(' ');
  let result = '';

  let i = 0;
  while (i < arr.length) {
    let word = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    result += ` ${word}`;
    i++;
  }
  return result.slice(1);
}

const vowelConsonant = function(input, checker) {
  let key = ['a', 'e', 'i', 'o', 'u', 'y'];

  input.forEach((letter) => {
    if (checker === 'v' && key.includes(letter)) {
      letter.toUpperCase();
    }
  })
}

const makeCase = function(input, cases) {

}

console.log(camelCase('testIIINg you fly guy'))
console.log(pascal('TestIIINg you fly guy'))
console.log(snake('TestIIINg you fly guy'))
console.log(kebab('TestIIINg you fly guy'))
console.log(title('TestIIINg you fly guy'))


// console.log(makeCase("this is a string", "camel"));
// console.log(makeCase("this is a string", "pascal"));
// console.log(makeCase("this is a string", "snake"));
// console.log(makeCase("this is a string", "kebab"));
// console.log(makeCase("this is a string", "title"));
// console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this is a string", ["upper", "snake"]));

const camel = function(input) {
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

const vowel = function(input) {
  let key = ['a', 'e', 'i', 'o', 'u', 'y'];
  let arr = input.split('');
  let result = ''

  arr.forEach((letter) => {
    if (key.includes(letter)) {
      result += letter.toUpperCase();
    } else {
      result += letter.toLowerCase();
    }
  })
  return result;
}

const consonant = function(input) {
  let key = ['a', 'e', 'i', 'o', 'u', 'y'];
  let arr = input.split('');
  let result = ''

  arr.forEach((letter) => {
    if (!key.includes(letter)) {
      result += letter.toUpperCase();
    } else {
      result += letter.toLowerCase();
    }
  })
  return result;
}

const makeCase = function(input, cases) {
  let styling = cases;
  let result = input;

  if (typeof(cases) === "string") { styling = [cases] }

  for (let i = 0; i < styling.length; i++) { //precedence 1 logic
    if (styling[i] === 'camel') {
      result = camel(result);
    } else if (styling[i] === 'pascal') {
      result = pascal(result);
    } else if (styling[i] === 'snake') {
      result = snake(result);
    } else if (styling[i] === 'kebab') {
      result = kebab(result)
    } else if (styling[i] === 'title') {
      result = title(result);
    }
  }

  for (let i = 0; i < styling.length; i++) { //precedence 2 logic
    if (styling[i] === 'vowel') {
      result = vowel(result);
    } else if (styling[i] === 'consonant') {
      result = consonant(result);
    }
  }

  for (let i = 0; i < styling.length; i++) { //precedence 3 logic
    if (styling[i] === 'upper') {
      result = result.toUpperCase();
    } else if (styling[i] === 'lower') {
      result = result.toLowerCase();
    }
  }

  return result;
}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

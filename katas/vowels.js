const numberOfVowels = function(data) {
  let sum = 0;
  let arr = data.split('');
  arr.forEach((letter) => {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'y') {
      sum += 1;
    }
  })
  return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

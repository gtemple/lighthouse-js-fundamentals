const squareCode = function(message) {
  let phrase = message.split(' ').join('');
  let squared = Math.ceil(Math.sqrt(phrase.length));
  let code = [];
  
  
  for (let i = 0; i < squared; i++) {
    let row = [];
    for (let j = i; j < phrase.length; j += squared) {
      row.push(phrase[j]);
    }
    code.push(row.join(''));
  }
  return code.join(' ');
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

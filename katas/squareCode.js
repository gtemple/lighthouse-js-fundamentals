const squareCode = function(message) {
  let phrase = message.split(' ').join('');
  let squared = Math.ceil(Math.sqrt(phrase.length));

  for (let i = 0; i < phrase.length; i += squared) {
    
  }

  return squared;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

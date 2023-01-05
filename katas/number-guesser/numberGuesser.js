let prompt = require("prompt-sync")();

let guess = function() {
  let randomNumber = Math.floor(Math.random(1, 100) * 100);
  let answer = prompt("Guess a number: ");
  let answers = [];
  let attempts = 0;
  let check = false;

  while (check === false) {
    if (answer > 100 || answer < 1) {
      console.log('That number is invalid! Guess a number between 1 and 100.');
      answer = prompt("Guess a number: ")
    } else if (answers.includes(answer)) {
      console.log('Already guessed!');
      answer = prompt("Guess a number: ")
    } else if(answer > randomNumber) {
      console.log('Too high!');
      attempts += 1;
      answers.push(answer);
      answer = prompt("Guess a number: ")
    } else if (answer < randomNumber) {
      console.log('Too low!');
      attempts += 1;
      answers.push(answer);
      answer = prompt("Guess a number: ")
    } else if (answer == randomNumber) {
      attempts += 1;
      check = true;
    } else {
      console.log(`That's not a number! Try again.`)
      answer = prompt("Guess a number: ")
    }
  }

  if (attempts === 1) {
    console.log(`Congrats, you guessed the number ${randomNumber}! It took you ${attempts} try.`)
  } else {
    console.log(`Congrats, you guessed the number ${randomNumber}! It took you ${attempts} tries.`);
  }
}

guess();
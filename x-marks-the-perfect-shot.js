const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  for (let i in moves) {
    if (moves[i] === 'north') {
      y += 1;
    } else if (moves[i] === 'south') {
      y -= 1;
    } else if (moves[i] === 'east') {
      x += 1;
    } else if (moves[i] === 'west') {
      x -= 1;
    };
  };
  return [x, y];
}

console.log(finalPosition(moves));
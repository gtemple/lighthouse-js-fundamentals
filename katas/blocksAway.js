const blocksAway = function(directions) {
  // NOTE** This function would also work in a grid spanning infinitely in every direction by returning negative numbers if the taxi were south or west of [0, 0]. Simply remove the Math.abs statements before the return statement.
  let facing = 0
  let coords = {
    'east': 0,
    'north': 0
  }

  for (let i = 0; i < directions.length; i += 2) {
    if (facing === 0) {
      if (directions[i] === 'right') {
        facing = 1;
        coords.east += directions[i + 1];
      } else {
        facing = 3;
        coords.east -= directions[i + 1]
      }
    } else if (facing === 1) {
      if (directions[i] === 'right') {
        facing = 2;
        coords.north -= directions[i + 1];
      } else {
        facing = 0;
        coords.north += directions[i + 1]
      }
    } else if (facing === 2) {
      if (directions[i] === 'right') {
        facing = 3;
        coords.east -= directions[i + 1];
      } else {
        facing = 1;
        coords.east += directions[i + 1]
      }
    } else {
      if (directions[i] === 'right') {
        facing = 0;
        coords.north += directions[i + 1];
      } else {
        facing = 3;
        coords.north -= directions[i + 1]
      }
    }
  }
  coords.east = Math.abs(coords.east);
  coords.north = Math.abs(coords.north);
  return coords;
};


console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

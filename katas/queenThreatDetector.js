let whiteQueen = [0, 0];
let blackQueen = [6, 6];

function generateBoard(white, black) {
  let board = []

  for (let i = 0; i < 8; i++) {
    let row = []
    for (let j = 0; j < 8; j++) {
      if (white[0] === j && white[1] === i) {
        row.push(1);
      } else if (black[0] === j && black[1] === i) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    board.push(row);
  }
  console.log(board);
  return board;
}

function queenThreat(board) {
  let threat = false;
  let coords = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[j].length - 1; j++) {
      if (board[i][j] === 1) {
        coords.push(i);
        coords.push(j);
      }
    }
  }
  console.log(coords)
  if (coords[0] === coords [2] || coords[1] === coords[3]) { threat = true }
  if (coords[0] - coords[1] === coords[2] - coords[3]) { threat = true }
  return threat;
}

let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generateBoard);
console.log(queenThreat(generatedBoard));

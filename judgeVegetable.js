const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const judgeVegetable = (vegetables, metric) => {
  let winner;
  let score = 0;
  for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i][metric])
    if (vegetables[i][metric] > score) {
      winner = vegetables[i].submitter;
      score = vegetables[i][metric];
    }
  }
  return winner;
}

console.log(judgeVegetable(vegetables, 'redness'));

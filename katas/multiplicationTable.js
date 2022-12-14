const multiplicationTable = function(maxValue) {
  let table = [];

  for (let i = 0; i <= maxValue; i++) {
    let arr = [];
    for (let j = 0; j < i * maxValue; j += i) {
      arr.push(j);
    }
    arr.push(i * maxValue);
    table.push(arr.slice(1));
  }
  return table.slice(1);
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));


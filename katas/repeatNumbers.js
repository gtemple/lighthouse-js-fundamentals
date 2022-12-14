const repeatNumbers = function(data) {
  let result = '';
  data.forEach((datum) => {
    string = datum[0].toString().repeat(datum[1]);
    result += string + ', '
  })
  return result.slice(0, -2);
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

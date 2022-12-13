const sumLargestNumbers = function(data) {
  let largest = data[0];
  let secondLargest;
  let duplicate = false; //checks for 2 identical numbers in an array

    data.forEach((datum)=> {
      if (datum > largest) {
        largest = datum
      } else {
        secondLargest = datum;
      }
    })

    data.forEach((datum)=> {
      if (datum === largest && duplicate === false) {
        duplicate = true;
      } else if (datum > secondLargest) {
        secondLargest = datum;
      }
    })

  return largest + secondLargest;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

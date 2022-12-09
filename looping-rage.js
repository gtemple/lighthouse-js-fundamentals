function range(start, end, step) {
  let num = start;
  let arr = [];
  if (step > 0 && start < end) {
    while (num <= end) {
      arr.push(num);
      num += step;
    }
  } 
  return arr;
}
// console.log(range(0, 10, 2));
// console.log(range(10, 30, 5));
// console.log(range(-5, 2, 3));
// console.log(range(0, 10, -2));
// console.log(range(10, 30, undefined));
// console.log(range(-5, 2, 0));
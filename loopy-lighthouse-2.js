function loopyLighthouse(range, multiples, words) {
  let arr = [];
  let i = range[0];
  while (i <= range[1]) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      arr.push(`${words[0] + words[1]}`);
    } else if (i % multiples[0] === 0) {
      arr.push(words[0]);
    } else if (i % multiples[1] === 0) {
      arr.push(words[1]);
    } else {
      arr.push(i);
    }
    i++
  }
  arr.forEach(elm => console.log(elm));
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

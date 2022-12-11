function smartGarbage(trash, bins) {
  let total = bins;
  if (trash === 'waste') {
    total.waste += 1;
  } else if (trash === 'recycling') {
    total.recycling += 1;
  } else {
    total.compost += 1;
  }
  return total;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

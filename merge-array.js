function merge(arr1, arr2) {
  let arrFinal = arr1;
  for (let i = 0; i < arr2.length; i++) {
    arrFinal.push(arr2[i]);
  }
  return arrFinal.sort();
}
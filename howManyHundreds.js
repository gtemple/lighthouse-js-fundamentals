let howManyHundreds = function (num) {

  let boxes = 0;

  if (num < 100) {
    boxes = 0;
  } else {
    boxes = Math.floor(num / 100);
  }
  return boxes;
};

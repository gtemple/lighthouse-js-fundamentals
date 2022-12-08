let calculateRectangleArea = function (length, width) {
  let area = length * width
  if (area > 0) {
    return area;
  } else {
    return undefined;
  }
}

let calculateTriangleArea = function (base, height) {
  let area = (base * height) / 2;
  if (area > 0) {
    return area;
  } else {
    return undefined;
  }
};

let calculateCircleArea = function(radius) {
  if (radius <= 0) {
    return undefined;
  } else {
    return Math.PI * (radius * radius);
  }
};
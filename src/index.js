
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  };

  const arrSort = array.sort((a, b) => a - b);
  return arrSort[0];
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  };

  const arrSort = array.sort((a, b) => a - b);
  return arrSort[array.length - 1];
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  };

  const arrSum = array.reduce((sum, item) => sum + item, 0);
  return arrSum / array.length;
}

const middle = function (array) {
  let midElements = [];
  let midIndex = Math.floor(array.length/2);

  if((array.length <= 2) === 0) {
    return midElements;
  }
  else if(array.length % 2 === 0) {
    midElements.push(array[midIndex-1]);
    midElements.push(array[midIndex]);
  }
  else midElements.push(array[midIndex]);
  return midElements;
}

module.exports = middle;



const assertArraysEqual = require('./assertArraysEqual');

const flatten = function (array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (element of array[i]) {
        newArray.push(element);
      }
    }
    else{
      newArray.push(array[i])
    }
  }
  return newArray;
}

module.exports = flatten;
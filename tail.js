const assertEqual = require('../assertEqual');

let newArray = [];
const tail = function(input) {
  if (input.length <= 1) {
    newArray = [];
  } else {
    for (let i = 1; i <= input.length; i++) {
      newArray.push(input[i]);
    }
  }
  return newArray;
};

/*
const tail = function(input) {
  if (input.length === 0) return [];
  if (input.length === 1) return input;
  input.shift();
  return input;
}
*/

module.exports = tail;

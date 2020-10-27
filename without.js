const eqArrays = function (array1, array2) {
  let count = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      count++;
    }
  }
  if (count === array1.length && count === array2.length) return true;
  else return false;
};

const assertArraysEqual = function (array1, array2) {
  let count = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      count++;
    }
  }
  if (count === array1.length && count === array2.length) {
    console.log(`✅✅✅👻 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑💩 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const without = function (array1, array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      newArray.push(array1[i])
    }
  }
  return newArray;
};

/// TEST CODE
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const numbers = [1,2,3,4,5];
without(numbers, ["1",2,3,"4",5]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(numbers, [1,2,3,4,5]);

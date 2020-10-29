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
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅👻 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑💩 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["ground", "control", "to", "major", "tom"];
const words3 = ["ground", "", "to", "major", "Dave"]

const results1 = map(words, word => word[0]);
console.log(results1)

const results2 = map(words2, word => word[0]);
console.log(results2)

const results3 = map(words3, word => word[0]);
console.log(results3)

//TEST CODE

assertArraysEqual(results1, results2)
assertArraysEqual(results1, results3)
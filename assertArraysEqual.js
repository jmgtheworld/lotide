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
// TEST CODE
assertArraysEqual ([1, 2, 3], [1, 2, 3]); 
assertArraysEqual ([1, 2, 3], [3, 2, 1]);
assertArraysEqual ([1, 2, 3], [1, 2, '3']);
assertArraysEqual ([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual (['',false, 0], [null, false, NaN]);


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


//TEST CODE
assertArraysEqual (middle([1]), [])
assertArraysEqual (middle([1, 2]), []) 
assertArraysEqual (middle([1, 2, 3]), [2])
assertArraysEqual (middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual (middle([1, 2, 3, 4]), [2, 3] )
assertArraysEqual (middle([1, 2, 3, 4, 5, 6]), [3, 4])
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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  const noSpaces = sentence.split(" ").join("");

  for (let i = 0; i <noSpaces.length; i++) {
    if(results[noSpaces[i]]){
      results[noSpaces[i]].push(i);
    }
    else{
      results[noSpaces[i]] = [i];
    }
  }

  return results;
};


// TEST CODE
console.log(letterPositions("lighthouse in the house"))
assertArraysEqual(letterPositions("helllo").h, [0]);
assertArraysEqual(letterPositions("helllo").e, [1]);
assertArraysEqual(letterPositions("helllo").l, [2,3,4]);
assertArraysEqual(letterPositions("helllo").o, [5]);
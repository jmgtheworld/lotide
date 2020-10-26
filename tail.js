const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅👻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};


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








// Test Case: Check the original array
const words = ["Yo Yo Else Hello", "df", 'asdf'];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(newArray.length, 1);
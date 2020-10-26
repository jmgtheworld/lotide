const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅👻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const head = function (input) {
  if (input.length < 0){
    return "Undefined";
  } else {
  return input[0];
  };
}

// Test Code
assertEqual(head([]), 5);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
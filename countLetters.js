const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅👻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (setence) {
  const noSpaces = setence.split(" ").join("");
  let count = {};
  for (letter of noSpaces) {
    if (count[letter]) count[letter]++;
    else count[letter] = 1;
  } 
  return count;
}

// TEST CODE
console.log(countLetters("lighthouse in the house"))
 
/* Output
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
  */

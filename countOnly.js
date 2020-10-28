const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅👻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
	let count = {};

  // loop through list of names
  for (let name of allItems) {
    // if name to count is true and it exists in the list of names, increment
    if (itemsToCount[name]) {
      if (count[name]) {
        // store in object
        count[name]++;
      }
      else{
        count[name] = 1;
      }
    } 
  }
  return count;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
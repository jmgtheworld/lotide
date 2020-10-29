const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅👻 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// Implement the function findKey which takes in an object and a callback. 
//It should scan the object and return the first key for which the callback 
// returns a truthy value. If no key is found, then it should return undefined.

const findKey = function (object, callback) { 
  let keys = Object.keys(object);
  for (key of keys)  {
    if (callback(object[key])) {
      return key;
    } 
  }
}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"

console.log(findKey({
  "Michael": { hotness: 10 },
  "Jim": { hotness: 8 },
  "Pam": { hotness: 9 },
  "Tobu": { hotness: 4 },
}, x => x.hotness === 10)) // => "noma"

// TEST CODE
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "Michael": { hotness: 10 },
  "Jim": { hotness: 8 },
  "Pam": { hotness: 9 },
  "Tobu": { hotness: 4 },
}, x => x.hotness === 10), "Michael");

const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

// TEST CODE
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe('#findKeyByValue', () => {
  it ("should return 'drama' when input is 'The Wire'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
  });
  it ("should return 'undefined' when input is 'That '70s Show'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
  });
})

const OfficeCharacters = {
  Jim : "Stares into camera",
  Dwight : "Beet farmer",
  Michael: "That's what she said",
  Pam : "Pamela",
  Angela: "Cats",
  Stanley: "Crossword puzzles"
}

describe('#findKeyByValue', () => {
  it ("should return 'Jim' when input is 'Stares into camera'", () => {
    assert.deepEqual(findKeyByValue(OfficeCharacters, "Stares into camera"), "Jim")
  });
  it ("should return 'Dwight' when input is 'Beet farmer'", () => {
    assert.deepEqual(findKeyByValue(OfficeCharacters, "Beet farmer"), "Dwight")
  });
})




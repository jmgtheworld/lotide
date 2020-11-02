const assert = require('chai').assert;
const middle = require('../middle')

/*
//TEST CODE
assertArraysEqual (middle([1]), [])
assertArraysEqual (middle([1, 2]), []) 
assertArraysEqual (middle([1, 2, 3]), [2])
assertArraysEqual (middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual (middle([1, 2, 3, 4]), [2, 3] )
assertArraysEqual (middle([1, 2, 3, 4, 5, 6]), [3, 4])
*/

describe('#middle', () => {
  it("returns empty array for [1]", () => {
    assert.deepEqual(middle([1]), [])
  });
  it("returns empty array for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), [])
  });
  it("returns [2] array for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  });
  it("returns[2, 3] array for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  });
  it("returns empty array for [1, 2, 3, 4, 5, 6", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  });
  
});
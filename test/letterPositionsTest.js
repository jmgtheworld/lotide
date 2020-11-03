const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it("should return [0] when input is letterPositions('helllo').h", () => {
    assert.deepEqual(letterPositions("helllo").h, [0]);
  });
  it("should return [1] when input is letterPositions('helllo').e", () => {
    assert.deepEqual(letterPositions("helllo").h, [0]);
  });
  it("should return [5] when input is letterPositions('this iz sparta').z", () => {
    assert.deepEqual(letterPositions("this iz sparta").z, [5]);
  });
  it("should return [2, 3, 4] when input is letterPositions('helllo').l", () => {
    assert.deepEqual(letterPositions("helllo").l, [2,3,4]);
  });
});
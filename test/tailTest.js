const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("returns '3' for ['Yo Yo Else Hello', 'df', 'asdf']", () => {
    assert.deepEqual(tail(['Yo Yo Else Hello', 'df', 'asdf']), ['df', 'asdf']);
  });
});


const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = letterPositions;
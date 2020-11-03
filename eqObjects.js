const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // Check if there are same number of keys
  if (Object.keys(object1).length === Object.keys(object2).length) {
  // Compare values with each key for both objects
    for (key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if ( !eqArrays(object1[key],object2[key]) ) return false;        
      }
      else if(object1[key] !== object2[key]) return false
    }
  }
  else return false;

  return true;
};


module.exports = eqObjects;
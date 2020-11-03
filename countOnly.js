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


module.exports = countOnly;
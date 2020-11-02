const eqArrays = function (array1, array2) {
  let count = 0;
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      count++;
    }
  }
  if (count !== array1.length || count !== array2.length) return false;
  
  return true;
};

module.exports = eqArrays;




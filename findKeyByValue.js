const findKeyByValue = function (object, value) {
  let keys = Object.keys(object);
  for (key of keys) if (object[key] === value) return key;
}

module.exports = findKeyByValue;
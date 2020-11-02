const head = function (input) {
  if (input.length < 0){
    return "Undefined";
  } else {
    return input[0];
  };
}

module.exports = head;
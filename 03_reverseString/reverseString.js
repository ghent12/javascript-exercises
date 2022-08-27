const reverseString = function(inputString) {
  let stringLength = inputString.length
    , holdingArray = [];

  if (typeof inputString == "string") {
    for (i = 0; i < stringLength; i++) {
      holdingArray.unshift(inputString[i]);
    }
    return (holdingArray.join('').toString());
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = reverseString;

const repeatString = function(targetString, repetitionNumber) {
  let repeatedString = targetString;
  for (i = 1; i < repetitionNumber; ++i) {
    repeatedString = repeatedString + targetString;
  }
  if (repetitionNumber < 0) {
    return "ERROR";
  } else if (repetitionNumber == 0 || targetString == "") {    
    return "";
  } else {
    return repeatedString;
  }
};

// Do not edit below this line
module.exports = repeatString;

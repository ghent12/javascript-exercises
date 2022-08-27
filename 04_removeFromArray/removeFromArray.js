const removeFromArray = function(targetArray) {
  let newArray = []
    , removalFlag = false;
  if (Array.isArray(targetArray)) {
    for (i = 0; i < targetArray.length; i++) {
      
      for (j = 1; j < arguments.length; j++) {
        
        if (targetArray[i] === arguments[j]) {
          removalFlag = true;
        }
      }
      if (removalFlag === true) {
        // Do nothing
        removalFlag = false;
      } else {
        newArray.push(targetArray[i]);
        removalFlag = false;
      }
    }
    console.log(arguments);
    return newArray;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = removeFromArray;

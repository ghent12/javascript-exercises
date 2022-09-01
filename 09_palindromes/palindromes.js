const palindromes = function (testString) {
  let testArray = testString.toLowerCase().split('')
    , newArray = []
    , offset = 0
    , isPalindrome = true;
  
  for (let i = 0; i < testArray.length; i++) {
//    console.log(testArray[i]);
    switch (testArray[i]) {
      case '!': 
        break;
      case '.':
        break;
      case ',':
        break;
      case ' ':
        break;
      default:
        newArray.push(testArray[i]);
    }
  }
  
  for (i = 0; i < newArray.length; i++) {
    if (newArray[newArray.length - 1 - i] !== newArray[i]) {
      isPalindrome = false;
    }
  }

//  console.log({testArray});
  console.log({newArray});
  console.log(offset)

  return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;

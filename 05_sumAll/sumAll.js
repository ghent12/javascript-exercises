const sumAll = function(x, y) {
/* 
This code will receive two numbers. It will add 
together all integers between the lowest provided 
number and the highest provided number, inclusively.

Need to determine which number is smaller via a 
comparator. Then can add each integer very simply with
a loop.
*/
  if (typeof x === "number" && typeof y === "number") {
    if ((x < 0) || (y < 0)) {
      return "ERROR";
    }
    if (x < y) {
      return addInOrder(x, y);
    } else {
      return addInOrder(y, x);
    }
  } else if ((typeof x != "number") && (typeof y != "number")) {
    return "ERROR";
  } else {
    return "ERROR";
  }


};

const addInOrder = function(q, r) {
  let adder = 0;
  for (i = 0; i <= (r - q); i++) {
    adder += (i + q);
  }
  return adder;
}


// Do not edit below this line
module.exports = sumAll;

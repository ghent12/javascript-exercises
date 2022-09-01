const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function() {
	if (arguments.length === 0) {
    return 0;
  }
  let total = 0;
  for (let i = 0; i < arguments[0].length; i++) {
    total += arguments[0][i];
  }
  return total;
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

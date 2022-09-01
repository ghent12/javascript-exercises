const fibonacci = function(x) {
  let fibonacciArray = [Number(x)];
  fibonacciArray[0] = 1;
  fibonacciArray[1] = 1;

  for (let i = 2; i <= x; i++) {
    fibonacciArray[i] = fibonacciArray[i-1] + fibonacciArray[i-2]
  }

  if (x < 0) {
    return "OOPS";
  } else {
    return fibonacciArray[x-1];
  }
};

// Do not edit below this line
module.exports = fibonacci;

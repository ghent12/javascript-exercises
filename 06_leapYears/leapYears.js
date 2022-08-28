const leapYears = function(testYear) {
  let isLeapYear = false;

  if (testYear % 4 == 0) {
    isLeapYear = true;
  }

  if (testYear % 100 == 0) {
    isLeapYear = false;
  }

  if (testYear % 400 == 0) {
    isLeapYear = true;
  }

  if (typeof testYear != "number") {
    isLeapYear = false;
  }

  return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;

const findTheOldest = function(people) {
  const oldest = people.sort((a, b) => {
    let aDeath, bDeath;
    switch (typeof a.yearOfDeath) {
      case 'undefined':
        aDeath = new Date().getFullYear();
        break;
      default:
        aDeath = a.yearOfDeath;
    }
    switch (typeof b.yearOfDeath) {
      case 'undefined':
        bDeath = new Date().getFullYear();
        break;
      default:
        bDeath = b.yearOfDeath;
    }


    const lastGuy = aDeath - a.yearOfBirth;
    const nextGuy = bDeath - b.yearOfBirth;
    return lastGuy > nextGuy ? -1 : 1;
  })
  console.log(oldest);
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;

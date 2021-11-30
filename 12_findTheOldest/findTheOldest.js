const findTheOldest = function(people) {
    const ordered = people.sort(function(lastPerson, currentPerson) {
        if (lastPerson['yearOfDeath'] === undefined) {
            lastPerson.yearOfDeath = new Date().getFullYear()
        }
        if (!currentPerson['yearOfDeath']) {
            currentPerson.yearOfDeath = new Date().getFullYear()
        }
        let lastPersonAge = lastPerson.yearOfDeath - lastPerson.yearOfBirth
        let currentPersonAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth
        if ( lastPersonAge > currentPersonAge) {
            return -1
        } else {
            return 1
        }
    })
    return ordered[0]
};
const people2 = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

    const people = [
        {
          name: "Carly",
          yearOfBirth: 2018,
        },
        {
          name: "Ray",
          yearOfBirth: 1962,
          yearOfDeath: 2011,
        },
        {
          name: "Jane",
          yearOfBirth: 1912,
          yearOfDeath: 1941,
        },
      ]

console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;

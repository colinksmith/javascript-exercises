const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
  if (array.length === 0) {
    return 0
  }
	return array.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
  })
};

const multiply = function(array) {
  return array.reduce(function (previousValue, currentValue) {
    return previousValue * currentValue
  })
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(number) {
  if (number === 0) {
    return 1
  }
  let sum = 1
	for (let i = 1; number >= i; i++) {
     sum = sum * i
  }
  return sum
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

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

console.log(sum([1, 2, 3]))

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

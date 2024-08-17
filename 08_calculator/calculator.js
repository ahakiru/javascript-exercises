const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((sum, item) => item + sum, 0)
};

const multiply = function(array) {
  return array.reduce((result, item) => result * item, 1)

};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(a) {
  	if (a === 0) {return 1}
    else {
      let array = [];
      for (let i = 0; i < a; i++) {array.push(a-i)};
      return array.reduce((result, item) => result * item, 1) 
      } 
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

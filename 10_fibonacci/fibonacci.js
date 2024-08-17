const fibonacci = function(value) {
    if (value < 0) {return "OOPS"}
    else if (value == 0) {return 0}
    else {
    let array = [1, 1];
    for (i=1; i<value; i++) {
        array.push((array[i]+array[i-1]))
    };
    return array[value-1] }
};
console.log(fibonacci(6))

// Do not edit below this line
module.exports = fibonacci;

const sumAll = function(a, b) {
    let large;
    let small;
    if (a < 0 || b < 0 || typeof a != 'number' || typeof b != 'number') {
        return 'ERROR';
    } else if (a > b) {
        large = a;
        small = b;
    } else {
        large = b;
        small = a;
    } let sum = 0
    for (small; small <= large; small++) {
        sum = sum + small;
    } return sum;

};

// Do not edit below this line
module.exports = sumAll;

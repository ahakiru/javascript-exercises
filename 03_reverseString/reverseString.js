const reverseString = function(string) {
    let reverse = '';
    for (i = 1; i <= string.length; i++) {
             reverse += string[string.length - i];
    } return reverse;
};

// Do not edit below this line
module.exports = reverseString;

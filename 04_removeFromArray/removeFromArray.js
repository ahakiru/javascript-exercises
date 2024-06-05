const removeFromArray = function(array) {
    for (i=1; i < arguments.length; i++) {
        for (j=0; j < array.length; j++) {
                if (arguments[i] === array[j]) {
                    array.splice(j, 1);
                    j--;
                } else {continue;}
            }
        } return array;
}; 
// Do not edit below this line
module.exports = removeFromArray;

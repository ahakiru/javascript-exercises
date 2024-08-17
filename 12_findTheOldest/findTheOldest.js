const findTheOldest = function(array) {
    const d = new Date();
    let year = d.getFullYear();
    array.forEach(person => {
        person.yearOfDeath != undefined ? person.age = person.yearOfDeath - person.yearOfBirth : person.age = year - person.yearOfBirth
    });
    array.sort((a, b) => a.age - b.age);
    return array[array.length - 1];
};
// Do not edit below this line
module.exports = findTheOldest;

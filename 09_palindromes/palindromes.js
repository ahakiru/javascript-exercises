const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyzäöü0123456789';

    let forward = string.toLowerCase()
                        .split("")
                        .filter((char) => alphanumerical.includes(char))
                        .join("");
    let backward = forward.split("")
                            .reverse()
                            .join("");
    return forward === backward;
};
// Do not edit below this line
module.exports = palindromes;

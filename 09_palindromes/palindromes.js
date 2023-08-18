const palindromes = function (inputValue) {
    const input = inputValue.toLowerCase().replace(/[^a-z0-9]/g, "")
    return input.split("").reverse().join("") == input
};

// Do not edit below this line
module.exports = palindromes;

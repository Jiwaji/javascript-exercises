const findTheOldest = function(data) {
    let oldest
    let maxAge = 0

    data.map((item) => {
        const age = (item.yearOfDeath || new Date().getFullYear()) - item.yearOfBirth
        if(age > maxAge) {
            maxAge = age
            oldest = item
        }
    })

    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;

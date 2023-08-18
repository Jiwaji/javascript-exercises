const sumAll = function (start, end) {
    if (start < 0 || end < 0 || typeof start !== 'number' || typeof end !== 'number') {
        return 'ERROR'
    }

    if (end > start) {
        const temp = end
        end = start
        start = temp
    }
    let sum = 0
    for (let i = end; i <= start; i++) {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;

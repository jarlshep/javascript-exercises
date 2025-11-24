const sumAll = function(a, b) {
    let sum = 0;
    let low;
    let high;

    if (a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number" || Number.isInteger(a) === false || Number.isInteger(b) === false) {
        return "ERROR";
    }

    if (a < b) {
        low = a;
        high = b; 
    } else if (b < a) {
        low = b;
        high = a;
    } else if (a = b) {
        return a;
    }

    for (i = low; i <= high; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

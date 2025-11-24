const repeatString = function(string, num) {
    let newstr = "";

    if (num < 0) {
        newstr = "ERROR";
    } else {
        for (i = 0; i <= num - 1; i++) {
            newstr = newstr + string;
        }
    }
    
    return newstr;
};

// Do not edit below this line
module.exports = repeatString;

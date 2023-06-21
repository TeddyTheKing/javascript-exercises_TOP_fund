const repeatString = function(str, num) {
    let multi = "";
    for(let i = 0; i < num; i++) {
        multi += str;
    };

    if (num < 0) {
        return "ERROR"
    } else {
        return multi;
    }    
};

// Do not edit below this line
module.exports = repeatString;

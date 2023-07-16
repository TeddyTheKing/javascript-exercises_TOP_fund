const removeFromArray = function(myArr, spec) {
    let newArr = [];
    for (let i = 1; i < myArr.length; i++) {
        if (i !== spec) {
            newArr.push(i);
        } else {
            continue;
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

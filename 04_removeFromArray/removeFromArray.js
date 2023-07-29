const removeFromArray = function(myArr, spec) {
    let newArr = [];
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] !== spec) {
            newArr.push(myArr[i]);
        } else {
            continue;
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

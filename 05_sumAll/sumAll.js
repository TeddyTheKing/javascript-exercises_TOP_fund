const sumAll = function(a,b) {
    suma = 0;
    if (a > b) {
        for (let i = b; i <= a; i++) {
            suma += i;
        };
    } else if (a < 0 || b < 0) {
        return "ERROR";
    } else if (typeof a !== "number" || typeof b !== "number") {
        return "ERROR";
    } else {
        for (let i = a; i <= b; i++) {
        suma += i;
    }
}
return suma;
};

// Do not edit below this line
module.exports = sumAll;

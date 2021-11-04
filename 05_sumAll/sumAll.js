const sumAll = function(int1, int2) {
    let intLow = 0
    let intHigh = 0
    let x = 0
    if (typeof int1 !== 'number' && int2 !== 'number') {
        return "ERROR"
    }
    if (int1 < 0 || int2 < 0) {
        return "ERROR"
    }
    if (int1 > int2) {
        intLow = int2
        intHigh = int1
    } else {
        intLow = int1
        intHigh = int2
    }
    for (let i = intLow; i <= intHigh; i++) {
        x += i
    }
return x
};

console.log(sumAll(1, 4))
// Do not edit below this line
module.exports = sumAll;

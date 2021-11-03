const repeatString = function( string, num) {
    if (num < 0) {
        return "ERROR"
    }
    let x = ''
    for (let i = 0; i < num; i++) {
        x += string
    }
    return x
};
repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString;

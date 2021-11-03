const reverseString = function(str) {
    let strLength = str.length
    console.log(strLength)
    let stringsArray = []
    let reversedStringsArray = []
    for (let i = 0; i < strLength; i++) {
        stringsArray.push(str.slice(i, i + 1))
    }
    for (let i = 0; i < strLength; i++) {
        reversedStringsArray[i] = stringsArray[strLength - 1 -i]
    }
    let output = reversedStringsArray.join('')
    return output


};
// Do not edit below this line
module.exports = reverseString;
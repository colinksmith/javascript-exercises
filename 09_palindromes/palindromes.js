const palindromes = function (string) {
    const checkPunctuation = function (array) {
        if (array !== '!' && array !== ' ' && array !== ',' && array !== '.') {
            return array
        } else {
            return
        }
    }
    let lowerCaseString = string.toLowerCase()
    let myArray = lowerCaseString.split('')
    let sanitizedArray = myArray.filter(checkPunctuation)
    let placeholderArray = sanitizedArray.slice()
    let reversedArray = placeholderArray.reverse()
    let sanitizedString = sanitizedArray.join("")
    let reversedString = reversedArray.join("")

    if (reversedString == sanitizedString) {
        return true
    } else {
        return false
    }

};
console.log(palindromes('racecar'))
console.log(palindromes('Racecar'))
console.log(palindromes('Racecar!! and periods.'))

// Do not edit below this line
module.exports = palindromes;

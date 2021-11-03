const removeFromArray = function(functionArray, ...valueToBeRemoved) {
    let args = Array.from(functionArray);
    let newArgs = []
    let valuesToBeRemovedArray = valueToBeRemoved
    for (let index = 0; index <= valueToBeRemoved.length; index++) {
        
        for (let i = 0; i <= args.length; i++) {
            if (args[i] === valuesToBeRemovedArray[index] && args[i] !== undefined) {
                newArgs = args.splice(i, 1)
                if (index > 0) {
                    index--
                }
            }
        }
    }
    return args
};
console.log(removeFromArray([1, 2, 3, 4], 3))
console.log(removeFromArray([1, 2, 3, 4], 3, 2))


// Do not edit below this line
module.exports = removeFromArray;

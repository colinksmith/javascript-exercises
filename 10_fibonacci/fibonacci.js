const fibonacci = function(input) {
    if (input < 0) {
        return "OOPS"
    }
    if (typeof(input) === 'string') {
        input = parseInt(input)
    }
    let array = [0, 1, 1]
    for (let i = 2; i < (input + 2); i++)

        array.push(array[array.length - 1]+array[array.length - 2])
    return array[input]
};
console.log(fibonacci(4))
console.log(fibonacci(6))
console.log(fibonacci(-25))
console.log(fibonacci("5"))

// Do not edit below this line
module.exports = fibonacci;

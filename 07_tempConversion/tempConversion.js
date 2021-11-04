const ftoc = function(fahrenheit) {
  let celcius = ((fahrenheit - 32) / 9) * 5 
  let numInts = Math.round(celcius)
  if (!Number.isInteger(celcius)) {
    let numIntsString = numInts.toString()
    let answer = Number(celcius.toFixed(1))
    // if (numInts < 0) {
      return answer
    // }else {
    //   return celcius.toPrecision(numIntsString.length + 1)
    
  }else{
    return celcius
  }
};

const ctof = function(celcius) {
  let fahrenheit = (celcius * 9) / 5 + 32
  let numInts = Math.round(fahrenheit)
  if (!Number.isInteger(fahrenheit)) {
    let numIntsString = numInts.toString()
    return Number(fahrenheit.toFixed(1))
  }else{
    return fahrenheit
  }
};
console.log(ftoc(100))
console.log(ftoc(-100))
console.log(ctof(73.2))
console.log(ctof(-10))

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

Number.prototype.power = function(exp) {
    return Math.pow(this, exp)
  }
  

  let number = 2
  let exponent = 3
  let result = number.power(exponent)
  console.log(`${number} ^ ${exponent} = ${result}`)
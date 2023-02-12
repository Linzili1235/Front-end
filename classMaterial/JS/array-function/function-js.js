// 1. define a function
// function: reusable, pre-defined blocks of codes

// 1.1 Example
// this is a function to print names
function printNames() {
  console.log('My name is Rocky')
}

// 1.2 structure
// key word: function
// naming: camelCase() {}
// {code block}
// function definition is not executed
// nature of function: memory address

// 2 call the function (invoke the function)
// function name followed by ()
// execute the code block in the memory address
printNames()

// can call multiple times
printNames()
printNames()

// 3 properties of function
// 3.1 input parameters / formal parameter
// parameters are dummy/place-holding variable
function printNames1(a) {
  console.log('My name is', a)
}

// 3.2 actual argument
printNames1('Audrey')
printNames1('Felix')
// 'Audrey', 'Felix' are arguments


function addition(a = 3, b = 4) {
  let sum = a + b
  // console.log(a, '+', b, '=', sum)
  return sum
}

addition(6, 9)
addition(6, 10, 5)

// 3.3 default value
// function addition(a, b = 4)
addition(6)

addition()

// 3.4 return value

let res = addition(7, 8)
console.log('result is', res)

// a function may not have a return value
// then it does not return any value

// classwork:
// invoice function
// input:
let items = [8300, 360, 700, 1000]
// output: total (tax included, rate 1.13)

function invoice(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  total *= 1.13
  return total
}

let totalCost = invoice(items)
console.log(totalCost)

// homework:
// 1. for array:
// print scores backwards (using while loop)
let scores = [85, 72, 60, 33]

// 2.for function: reform your invoice function to be able to handle variouse taxrate

// 3.Challenge:
// > $1000, luxury goods, collect price list
// <= $1000, common goods, collect price list
// input: items price in cart, taxRate
// output: total, arrLuxury, arrCommon
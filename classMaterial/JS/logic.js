// 1 logical operation
// and &&
let score = 70
score = 69
let gender = 'male'
let findRes1 = score >= 70 && gender === 'male' // both are true, result is true

// or ||
let findRes2 = score <= 40 || gender === 'male' // either is true, result is true
console.log(findRes1, findRes2)

// not !

let a = true
a = 6
a = 0
let b = !a // logic not, b = false
console.log('b is', b)

// let c = !b
let c = !!a
console.log('c is', c)

// 2 falsy values / truthy values
// A falsy value is something which evaluates to FALSE
// for instance when checking a variable.

// There are only 6 falsy values in JS

// false
// 0
// empty string ''
// undefined
// null
// NaN

// everything else is truthy value

let d = null

console.log('d is', !!d)

b = '2'
a = parseInt(b)
console.log(b, typeof b, a, typeof a)

b = 'Mike'
a = parseInt(b)
console.log(b, typeof b, a, typeof a)

// 3 logic control

// 3.1 if else

score = 97

score >= 60 ? console.log('passed') : console.log('failed')
// yiw  yank inner word
if (score >= 60){
  console.log('passed')
} else {
  console.log('failed')
}

if (score >= 90) {
  console.log('excellent')
} else if (score < 90 && score >= 60) {
  console.log('passed')
} else {
  console.log('failed')
}

// 3.2 && expression

let number = 6

if (number === 7) {
  console.log('Winner')
}
// same as
number === 6 && console.log('Winner')

// 3.3 switch case
let fruit = 'apple'
// fruit = 'peach'
// fruit = 'pear'

switch (fruit) {
  case 'orange':
    console.log('This is orange')
    break
  case 'apple':
    console.log('This is apple')
    break
  case 'banana':
    console.log('This is banana')
    break
  case 'peach':
    console.log('This is peach')
    break
  case 'mango':
    console.log('This is mango')
    break
  default:
    console.log('no such fruit')
}


console.log('out of switch case')

// homework:
a = 6
b = 5
c = a-- <= ++b && a++ < --b  // the first part is false, then no second part
// what is a, b, c?
// a is 6, b is 5, c is false

a = 6
b = 5
c = a-- <= ++b || a++ < --b // if the first part is true, then no second part
// what is a, b, c?
// a is 5, b is 6, c is true


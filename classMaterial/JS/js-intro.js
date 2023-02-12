
// declare a var: give a name to a memory
let name = 'Audrey'
let age = 26
let isGirl = true
console.log(name, age, )

// let should be reassign values if you need or you use const
name = 'Felix' //string: use '',"",``
console.log(name)

name = 2016
console.log(name)

const pi=3.14
console.log(pi)

// primitive data type

let classNumber //undefined

console.log(classNumber)


//expression
let score = 1
score += 2
console.log(score)


// order of operation
//remainder operator (modulo operator)
score = 5
let r = score % 2


// auto increment, decrement
score ++


let newScore1 = 2
let newScore2 = 3
console.log('newScore1++ is', newScore1++) // use first, then ++
console.log('newScore2++ is ', ++newScore2) // ++ first, then use
console.log(newScore2)

let s1 = score > 5
console.log(s1)

// !=(old) vs !==(new) you should use strict not equal to !!!!!!
// ==(old) vs ===(new) you should use strict equal
score = '5'
s1 = score !== 5
console.log('s1 is ', s1)


s1 = score != 5
console.log('s1 is ', s1)

s1 = score === 5
console.log('s1 is', s1)

// ternary operator
let scoreOne = 59
let res = scoreOne >= 60 ? 'Passed' : 'Failed'
console.log('result ====>', res)



let d = 5
let e = 4
r = e > d++
console.log(d,e,r)

// homework:
let b = 6
let a = b > b++ ? ++b : b--
// what is a? what is b?
// a is 7, b is 6

let c = a > b-- ? a-- : b++
// what is a, b, c?
// a is 6, b is 5, c is 7


b = 6
a = b <= b++ ? ++b : b--
// what is a, b?
// a is 8, b is 8
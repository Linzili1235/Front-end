
// and & or
// && and ||


let score = 70
let gender = 'male'
let findRes1 = score >= 70 && gender === 'male' // both are true

let findRes2 = score <= 40 || gender !== 'female' // one of them is true


console.log(findRes1)
console.log(findRes2)

// not !

let a = 6
let b = !a //logic not, b = false
let c = !!a //
console.log(c)


// 2 falsy values / truthy values
// falsy value is something which evaluates to False
// for instance when checking a varaible.

// There are only 6 falsy values in JS

// false
// 0
// empty string ''
// undefined
// null
// NaN not a number


//everything else is truthy value

let d = null
console.log('d is', !!d)


b = '2'
a = parseInt(b)
console.log(a,typeof b, b)

b = 'Mike'
a = parseInt(b)
console.log(b, typeof b, a, typeof a)

/// 3 logic control
/// 3.1 if else

score = 97
let asdf = score <= 100 ? console.log('false') : console.log('true')
console.log(asdf)

/// 4 if else
if (score >= 80) {
    console.log('excellent')
}
else if (60 < score < 80){
    console.log('passed')
} else {
    console.log('failed')
}

/// 3.2 && expression
///  第一个条件是true，执行后面的代码
let number = 6

if (number === 7) {
    console.log('Winner')
}

number === 6 && console.log('Winner')

/// 3.3 switch case
/// you have many cases to deal with

let fruit = 'apple'
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


    case 'mango':
        console.log('This is mango')
        break

    default:
        console.log('no such fruit')

}
console.log('Out of switch case')

/// for loop

for (let i = 10; i >= 1; i--) {
console.log(i)
}

for (let i = 0; i<=10; i+=2) {
    console.log(i)
}
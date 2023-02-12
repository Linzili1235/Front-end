// Lesson 14 ES2015

// 1. string interpolation: back tick ``
let name = 'Rocky'
console.log('the teacher\'s is ' + name) // 空格
console.log('the teacher is',name) // 不空格

// back tick / back quote ``
console.log(`the teacher is ${name}`)

let date = new Date()
console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())
console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`)

// 2. spread operator - array, object

// 2,1 assign in array, object doesn't copy, only provide a reference.
let studentNames = ['Colin','Joan']
let studentNames1 = studentNames
console.log(studentNames1)
studentNames[0] = 'TingTing'
console.log(studentNames1)

// 2.2 spread operator makes a copy
let studentNames2 = [...studentNames]
console.log(studentNames2)
studentNames[0] = 'Jeff'
console.log(studentNames2)

// 2.3 add new elements or properties
let studentNames3 = ['Fiona',...studentNames2,'Ning','Carl']
console.log(studentNames3)

let car = {name: 'ford',year: '2014'}


// 2.4 update existing properties
let carUpdate = {...car, year: '2020', mileage: 13000}
console.log(carUpdate)

// 2.5 Update existing properties, add new properties
let car2 = {name: 'Toyota', year: '2022', mileage: 0}
let carCollection = {...car,...car2}
console.log('car collection', carCollection)

// 2.6 spread first, then add new


// 3. Arrow function
function addition(a,b) {
    return a + b
}

const addition2 = function (a, b) {
    return a + b
}

const addition3 = (a,b) => { // like putting materials into the machine
    return a + b
}

// features
// 3.1 only one parameter, () can be omitted

const myFun = a => {
    console.log(`this input is ${a}`)
}
myFun(5)

// 3.2 one expression as return, {} can be omitted, even return can be omitted
const addition4 = (a,b) => a + b
console.log(addition4(4,3))

// 3.3 simplest way
const square = a => a**2
console.log(square(5))

// 看见箭头，左右摇头，左边是参数，右边函数体
const x = () => {
  
}

// 4. Destruction array and object
let phone = {brand: 'Huawei', price: 1000, color: 'red'}

// old way

// let price = phone.price
// console.log(price)

// new way
let {price} = phone
console.log(price)
let arr =  [1,2,3,4,5,6,7,0]
// old way
// let a = arr[0]
// let b = arr[1]
// arr[0] = 4

// new way
let [a,b,...rest] = arr
console.log(a,b,rest)


// 5. Object Property Value Shorthand
let brand = 'cherry'
let count = 104

// old way
// let keyboard = {
//     brand: brand
//     count: count
// }

// new way:
// when the key and variable passed-in using the same word
let keyboard = {
    brand,
    count
}

// 6. array methods (!!!!!)
// forEach, map, filter, reduce, find, findIndex, sort
// MDN: please learn there

let imgArr = ['url1', 'url2', 'url3', 'url4']

// 6.1 forEach
// no return as the new array
imgArr.forEach((e,i,a)=>console.log(i,e,a))

// 6.2 map
// return a new array as the result of applying a function to an array
let newImgArr = imgArr.map(e=> `https://${e}`)
console.log(newImgArr)

// 6.3 reduce
// reduce to a number
let sum = arr.reduce((previousValue,ele) => previousValue + ele,7)
console.log(sum)

// 6.4 filter
//
let even = arr.filter(value => value % 2 === 0) // true will stay
let evenMap = arr.map(e => e % 2 === 0)
console.log(even)
console.log(evenMap) // every element is the result of function
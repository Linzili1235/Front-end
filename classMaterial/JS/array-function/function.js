//1 . function
// this is a function to print names
function printNames() {
    console.log('My name is Rocky')
}

// 2. call the function
printNames()

// 3 properties of function
// 3.1 input parameters
function printNames(name) {
    console.log('My name is', name)
}
printNames(1)

function addition(a,b) {
    let sum = a + b
    return sum
}

function addition() {
    return 3+5
}

// 3.4 return value

let res = addition(5,7)
console.log(res)

let res1 = addition()
console.log(res1)


// classwork:
// invoice function
// input:
let items = [8300, 360, 700]
//output: total (tax included, rate 1.13)

function invoice(items) {
    let sum = 0
    for (i=0; i<items.length;i++){
        sum += items[i]*1.13
    }
    return sum
}
console.log(invoice(items))


//homework:
// invoice
//1.
function invoice1(items,rate) {
    let sum = 0
    for (let i=0;i<items.length;i++){
        sum += items[i]*(1+rate)
    }
    return sum
}
console.log(invoice1(items,0.13))
//Challenge: luxury goods, common goods
function invoice2(items, taxRate) {
    let luxury = []
    let common = []
    let sum = 0
    for (let i=0;i<items.length;i++){
        if (items[i] <= 1000) {
            common.push(items[i])
        }
        else {
            luxury.push(items[i])
        }
        sum += items[i]*(1+taxRate)
    }
    return (sum,[common,luxury])

}

console.log(invoice2(items,0.13))

let scores = [85, 72, 60, 33]
for (let i=scores.length-1;i>=0;i--){
    console.log(scores[i])
}


// define a function and consume it immediately
(function test() {
    console.log('hello, this is a test')
})()
// 1 array

let arrayA = ['book', 1, true, null]


console.log(arrayA)

// 1.1 nested array
let scores = [1,2,2,4]
let score1 = [1,3,5,scores,6]
console.log(score1)

// 1.2 index in array
// finding the first element in books
console.log(score1[0])
console.log(scores[scores.length-1])


// 2 Modify Array
// 2.1 array push
let score2 = score1 //they belong to the same position, so careful about it
scores.push(99)
scores.push(100)
console.log(score1)
console.log(score2)

// 3 array iterate
for (let i = 0; i< score2.length; i++) {
    console.log(score2[i])
}

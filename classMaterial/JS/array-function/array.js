// 1 array
let arrayA = ['book', 1, true, null]
let books = ['js', 'css', 'fishing', 'skiing', 'boating']
console.log(arrayA, books)

let scores = [85, 72, 60, 33]

// 1.1 nested array
let scores1 = [1, 3, 5, scores, 8, 7]
console.log(scores1)

// 1.2 index in array
// finding the first element in books use index 0
console.log(books[0])
console.log(books[books.length - 1])

// 1.3 array.length
// length is a property of array, the number of elements in the array
// the max index is length - 1

// 2 Modify Array
// 2.1 array push
scores.push(99)
scores.push(100)
scores.push(90)
console.log('scores is', scores)

// 2.2 modify one element
scores[3] = 59
console.log('scores is', scores)

// 3 array iterate
for (let i = 0; i < scores.length; i++) {
  scores[i] += 10
  console.log(scores[i])


}
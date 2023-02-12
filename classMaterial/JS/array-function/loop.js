// 1 for loop






for (let i = 0; i < 5; i++) {
  console.log(i)
}


console.log('out of for loop')
// let i = 0 variable initialization
// i < 5 loop condition for executing the code block
// i++ variable increment/decrement
// {code block}

// classwork
// print 10 to 1

// for (let i = 10; i > 0; ) {
//
//   console.log(i)
//   i--
// }

// classwork
// print even numbers from 0 to 10

for (let i = 0; i <= 10; i ++) {

  // i % 2 === 0 && console.log(i)
  if (i % 2 === 0) {
    console.log('line 35', i)
  } else {
    // break
    continue
    console.log('line 39', i)
  }
}

// // 2 while loop
//
// let i = 0
// while (i < 10) {
//   console.log(i)
//   i++
// }


// set the initialization outside first
// variable increment in code block

// 3 break
// exit from a loop or a witch-case

// 4 continue
// (skip) move the control to the next iteration of the loop

// 4.1 use continue in while loop
// must do increment before continue

i = 0
let n = 0

while (i < 5) {
  i++
  if (i % 3 === 0) continue
  console.log('i is', i)
}
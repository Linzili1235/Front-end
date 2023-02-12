// Create html element in JS

// 1. Create a container in html
// to collect the created elements

// const eleContainer = document.getElementById('container')

const eleBody = document.getElementsByTagName('body')[0]
const eleContainer = document.createElement('div')
eleBody.appendChild(eleContainer)

// // where I debug the results
// eleContainer.appendChild(eleH1)
let count = 0
function createH1() {
    count ++
    // create h1
    const eleH1 = document.createElement('h1')
    let date = new Date()
    eleH1.innerText = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    let colorName = getColor(count)
    eleH1.style = 'color:' + colorName
// ------------------------------------
    // where I debug the results
    eleContainer.appendChild(eleH1)

}
function getColor(n) {
    if (n%3 === 0) {
        return 'seagreen'
    } else if (n%3 === 1) {
        return 'red'
    } else {
        return 'blue'
    }
}
const eleButton = document.createElement('button')
eleButton.innerText = 'Show Time'
eleContainer.appendChild(eleButton)
eleButton.addEventListener('click',createH1)

// 2. create element

// 2.1 create element
// const eleH1 = document.createElement('h1') //give this element a position. 开了个房间

// 2.2 append to parent, put the element under an element
// eleContainer.appendChild(eleH1)


// 2.3 add some content to the element
// eleH1.innerText = 'Hello World'

// let date = new Date()
// eleH1.innerText = date.getDate()

// eleH1.innerText = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

// everytime you call it you need to rerun the whole script
// so we create a function for reuse

// 3. Create function to reuse the code

// let count = 0 // how to get the mouse click number
// // you can just find how many times the function runs
// function createH1() {
//     count ++
//     console.log(count)
//     const eleH1 = document.createElement('h1') //give this element a position. 开了个房间
//
// // 2.2 append to parent, put the element under an element
//     eleContainer.appendChild(eleH1)
//     let date = new Date()
// // eleH1.innerText = date.getDate()
//
//     eleH1.innerText = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
//     // 4. change the color of element
//     // eleH1.style = 'color: red'
//
//     // 5. multiple color
//     let colorName = getColor(count)
//     eleH1.style = 'color: ' + colorName
//
//
// }
//
// // 5.1 function to get color
// function getColor(index) {
//     if (index % 2 === 0) {
//         return 'red'
//     } else {
//         return 'seagreen'
//     }
//
//
// }
// dynamically add
// let eleButton = document.getElementById('btn')
// eleButton.addEventListener('click',createH1)

// homework





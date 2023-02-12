// Event

// 1.event
// 1.1 trigger
// When a user clicked a button
// When the mouse moves over an element
// When a key is pressed down

// event is part of html, what's appeared after you triggered.

// 1.2 handler
// a block of code that runs when event fires.

function clickHandler() {
    console.log('clicked...')
}


// 2. register event handler statistically
// define / register event handler / listener

// 2.1 create handler
// 2.2 create html element
// For example, create a button

// 2.3 register handler in html
// add onclick="clickHandler()"

function keyPressedHandler() {
    console.log('pressed key ...')
}

function keyPressHandler2(eve) {
    console.log('pressed key ...',eve.keyCode) // eve.key and eve.keyCode
}

// 3. register event handlers dynamically
// handler is not registered in html but in js file

// 3.1 create handler
// define handler

function clickHandler() {
    console.log('clicked 1111')
}

// 3.2 create html element with an id

// DOM: document object model (通讯录）
// 3.3 find the element in DOM

let eleBtn1 = document.getElementById('button1') //return the position of the id

// 3.4 register listener / handler in js
eleBtn1.addEventListener('click',clickHandler)

print()
//
// functionName() -> call a function
// functionName -> callback function, 由用户决定什么时候调用, no ()
// the execution of a callback function is determined by the system

// 4.1 autonomous function
// you can put real parameters in
// real parameters will automatically put in the
eleBtn1.addEventListener('mouseenter',function (evt) {
    console.log('mouse moving in ...', evt.clientX,evt.clientY)
})






// more example
// 1. create handler

function mouseMOveHandler(evt) {
    console.log('mouse entered', evt.clientX, evt.clientY) // the width pixel and height pixel
}

// multiple handler on one element
eleBtn1.addEventListener('mouseenter',mouseMOveHandler)




// todo: homework
// create the ball
// get the position of the ball
// set the handler
let canvas = document.getElementById('ball')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let l = canvas.getContext('2d')
let x = canvas.width/2
let y = canvas.height/2


function ballHandler(event) {

    l.clearRect(0,0,innerWidth,innerHeight)
    l.beginPath()
    l.strokeStyle = 'black'
    l.arc(x,y,10,0,Math.PI * 2,false)
    l.stroke()



    let clientX = event.clientX
    let clientY = event.clientY

    x = clientX
    y = clientY


}
canvas.addEventListener('click',ballHandler)
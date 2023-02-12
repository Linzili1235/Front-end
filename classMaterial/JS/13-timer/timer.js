// Lesson 13 Timer

// 1. setTimeout: a one time timer

// function timeoutHandler() {
//     console.log('Now is;',new Date().getSeconds())
// }
// setTimeout(timeoutHandler, 2000) // callback function

// anonymous function
// it can only be used as a callback function


// setTimeout(function (){
//     console.log('Now is2:', new Date().getSeconds())
// },4000)


// 2. setInterval: a multiple time timer
// setInterval(timeoutHandler,3000)

// user setInterval to create elements periodically
const eleContainer = document.getElementById('container')
function createElement() {

    // 3.2 create h1 tag
    const eleH1 = document.createElement('h1')
    eleH1.innerText = 'Hi Rocky'
    eleContainer.appendChild(eleH1)



    // create button tag
    const eleButton = document.createElement('button')
    eleButton.innerText = 'click'
    eleContainer.appendChild(eleButton)

}

// 4. control setInterval

// 4.1 start setInterval


// 4.2 find the button Node
const elebtnStart = document.getElementById('start')

// 4.3 register handler dynamically
elebtnStart.addEventListener('click',startInterval)
let timerId = null
let idArr = []
function startInterval() {
    timerId = setInterval(createElement,2000) // 房间号
    idArr.push(timerId)
    console.log('the timer started',timerId)

}

// 4.4 stop a setInterval
// we need an interval id

// create a stop button
const elebtnStop = document.getElementById('stop')
elebtnStop.addEventListener('click',endInterval) // time id already be set to the final value

function endInterval() {
    console.log('the timer stopped:', idArr)
    for (let i = 0; i < idArr.length; i++) {
        clearInterval(idArr[i])
    }
    
}

// homework
// stop the in one click

// jumping time,running clock
// show a time in a setinterval, interval is 1 sec
// every second, inner text


// 1.11 first, create the h1 element and put the element in the html
const elebtnJumping = document.getElementById('jumping')
const eleH11 = document.createElement('h1')
eleContainer.appendChild(eleH11)


// 1.12 second, create a function handler that should be put in the set interval
// which is what you should do in every interval
function showTime() {
    let time = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    eleH11.innerText = time

}

// 1.13 third, create a function handler that should be put as the event
function timeHandler() {
    timeid = setInterval(showTime, 1000)
}

// 1.14 fourth, create a listener to the button
elebtnJumping.addEventListener('click',timeHandler)


// redo timer
const eleRedo = document.getElementById('redo')

function putInStart() {
    const h1 = document.createElement('h1')
    h1.innerText = new Date().getSeconds()
    eleContainer.appendChild(h1)
}

function putInHandler() {
    let timeId = setInterval(putInStart,1000)
    console.log('timeId')
}
eleRedo.addEventListener('click',putInHandler)








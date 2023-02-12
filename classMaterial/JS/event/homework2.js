// todo: homework
// create the ball
// get the position of the ball
// set the handler
let canvas = document.getElementById('ball')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
// canvas.style.backgroundColor = 'black'
let l = canvas.getContext('2d')
let x = canvas.width/2
let y = canvas.height/2
drawBall(x,y,'black')


function drawBall(positionX,positionY,color) {
    l.clearRect(0,0,innerWidth,innerHeight)
    l.beginPath()
    l.strokeStyle = 'black'
    l.arc(positionX,positionY,10,0,Math.PI * 2,false)
    l.stroke()
    l.fillStyle = color
    l.fill()
}
function ballHandler(event) {
    let clientX = event.clientX
    let clientY = event.clientY

    if (clientY < y) {
        console.log('move up')
        console.log(clientY,y)
        drawBall(clientX,clientY,'blue')
    }
    else if (clientY > y) {
        console.log('move down')
        console.log(clientY,y)
        drawBall(clientX,clientY,'seagreen')
    }
    else {
        drawBall(clientX,clientY,'black')
    }

    x = clientX
    y = clientY
}
canvas.addEventListener('click',ballHandler)
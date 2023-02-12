// todo: homework
// create the ball
// get the position of the ball
// set the handler

// create the canvas and ball
const ball = document.createElement('div')
let canvas = document.getElementById('main')
canvas.appendChild(ball)

// set the style of canvas and ball
canvas.style.width = '100%'
canvas.style.height = '100' + 'vh'
canvas.style.backgroundColor = 'black'
ball.style.backgroundColor = 'white'
ball.style.borderRadius = '50%'
ball.style.width = 30 + 'px'
ball.style.height = 30 + 'px'

let xPosition = '50%'
let yPosition = '50' + 'vh'

ball.style.position = 'relative'
ball.style.left = xPosition
ball.style.top = yPosition
let ballPosition = ball.getBoundingClientRect()

function movingBallHandler(event) {
    switch (event.keyCode) {
        case 37 :
            console.log('left')
            ball.style.left = ballPosition.left - 100 + 'px'
            console.log(ballPosition.left)
            break
        case 39 :
            ball.style.left = ballPosition.left + 100 + 'px'
            break
        case 38:
            ball.style.top = ballPosition.top - 100 + 'px'
            break
        case 40:
            ball.style.top = ballPosition.top + 100 + 'px'
            break
        default:
            console.log('Key not acceptable')
    }
    ballPosition = ball.getBoundingClientRect()


}

const body = document.getElementById('body')
body.addEventListener('keydown', movingBallHandler)



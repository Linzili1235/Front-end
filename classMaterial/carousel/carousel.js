

const images = ['/images/bp.jpeg',
    '/images/ice-cream.jpeg',
    '/images/lovesick-girl.jpeg',
    '/images/pink-venom.jpeg',
    '/images/shut-down.jpeg'
]

const description = [
    'blackpink',
    'ice cream',
    'lovesick girls',
    'pink venom',
    'shut down'
]

// key and value have the same name
const data = {
    images,
    description,
    index:0,
    timerID: null,
    arrButton: []
}

const objs = {
    img: document.querySelector('.carousel img'),
    btnBar: document.querySelector('.btnBar'),
    navPrev: document.querySelector('.btnNav.prev'),
    navNext: document.querySelector('.btnNav.next')
}

const cbClick = (event) => {
    console.log('clicked', event.target.dataset.imgid)
    let {imgid} = event.target.dataset
    console.log('type of imgid', typeof (imgid))
    imgid = Number(imgid)

    objs.img.src = data.images[imgid]

    // change the data.index so that the pic will be next of your clicked pic
    data.index = imgid
    update(data.index)
    stopAnimate()
    startAnimate()





}

const update = (index) => {
    objs.img.src = data.images[index]
    updateSelected(index)
}
const timeHandler = ()=>{
    data.index ++
    if (data.index >= data.images.length){
        data.index = 0
    }
    update(data.index)

}

const startAnimate = ()=>{
    data.timerID = setInterval(timeHandler, 3 * 1000)
}


const stopAnimate = ()=>{
    if (data.timerID){ //如果用户不停点击，只有效果一次
        clearInterval(data.timerID)
        data.timerID = null
    }

}

const updateSelected = (index) => {
    data.arrButton.forEach((ele,ix) => {
        ele.className = ''
        if (ix === index) {
            data.arrButton[index].className = 'btnSelected'
        }
    })
}
const cbMouseEnter = (event) => {
    stopAnimate()
}
const cbMouseLeave = (event) => {
    startAnimate()
}

const cbPagePrev = (event) => {
    if (data.index > 0){
        data.index --
    }
    update(data.index)
}
const cbPageNext = (event) => {
    if (data.index < data.images.length-1){
        data.index ++
    }
    update(data.index)
}
const createCarousel = () => {
    objs.img.src = data.images[data.index]
    objs.img.addEventListener('mouseenter',cbMouseEnter)
    objs.img.addEventListener('mouseleave', cbMouseLeave)
    objs.navPrev.addEventListener('click',cbPagePrev)
    objs.navNext.addEventListener('click',cbPageNext)

    for (let i=0; i<data.images.length;i++){
        let eleBtn = document.createElement('button')
        eleBtn.innerText = data.description[i]
        eleBtn.dataset.imgid = i
        eleBtn.addEventListener('click',cbClick)
        objs.btnBar.appendChild(eleBtn)
        data.arrButton.push(eleBtn)

        if (i === data.index){
            updateSelected(i)
        }

    }
}
createCarousel()
startAnimate()
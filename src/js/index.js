const bug = document.querySelector('.ladybird');
const upBtn = document.querySelector('#up');
const downBtn = document.querySelector('#down');
const rightBtn = document.querySelector('#right');
const leftBtn = document.querySelector('#left');
const homeBtn = document.querySelector('#home');
const turnClockwiseBtn = document.querySelector('#turnClockWise');
const turnAntiClockwiseBtn = document.querySelector('#turnAntiClockWise');

let xPos = 0
let yPos = 0
let rotation = 0

const setTransforms = () => {
    bug.style.left = `${xPos}px`
    bug.style.top = `${yPos}px`
    bug.style.transform = `rotate(${rotation}deg)`
}

const upShift = () => {
    yPos > 0 && (yPos -= 10)
    setTransforms()
}

const downShift = () => {
    yPos < 450 && (yPos += 10)
    setTransforms()
}

const leftShift = () => {
    xPos > 0 && (xPos -= 10)
    setTransforms()
}

const rightShift = () => {
    xPos < 450 && (xPos += 10)
    setTransforms()
}

const rotateClockwise = () => {
    rotation += 90
    setTransforms()
}

const rotateAntiClockwise = () => {
    rotation -= 90
    setTransforms()
}

upBtn.addEventListener("click", upShift)

downBtn.addEventListener("click", downShift)

leftBtn.addEventListener("click", leftShift)

rightBtn.addEventListener("click", rightShift)

turnClockwiseBtn.addEventListener("click", rotateClockwise)

turnAntiClockwiseBtn.addEventListener("click", rotateAntiClockwise)

homeBtn.addEventListener("click", () => {
    xPos = 0
    yPos = 0
    rotation = 0
    setTransforms()
})
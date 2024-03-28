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
let rotate = 0

const upShift = () => {
    if(yPos > 0) yPos -= 10
    bug.style.top = `${yPos}px`
}

const downShift = () => {
    if(yPos < 450) yPos += 10
    bug.style.top = `${yPos}px`
}

const leftShift = () => {
    if(xPos > 0) xPos -= 10
    bug.style.left = `${xPos}px`
}

const rightShift = () => {
    if(xPos < 450) xPos += 10
    bug.style.left = `${xPos}px`
}

const rotateClockwise = () => {
    rotate += 90
    bug.style.transform = `rotate(${rotate}deg)`
}

const rotateAntiClockwise = () => {
    rotate -= 90
    bug.style.transform = `rotate(${rotate}deg)`
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
    rotate = 0
    bug.style.top = `${yPos}px`
    bug.style.left = `${xPos}px`
    bug.style.transform = `rotate(${rotate}deg)`
})
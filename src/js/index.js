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

upBtn.addEventListener("click", () => {
    if(yPos > 0) yPos -= 10
    bug.style.top = `${yPos}px`
})

downBtn.addEventListener("click", () => {
    if(yPos < 450) yPos += 10
    bug.style.top = `${yPos}px`
})

rightBtn.addEventListener("click", () => {
    if(xPos < 450) xPos += 10
    bug.style.left = `${xPos}px`
})

leftBtn.addEventListener("click", () => {
    if(xPos > 0) xPos -= 10
    bug.style.left = `${xPos}px`
})

turnClockwiseBtn.addEventListener("click", () => {
    rotate += 90
    bug.style.transform = `rotate(${rotate}deg)`
})

turnAntiClockwiseBtn.addEventListener("click", () => {
    rotate -= 90
    bug.style.transform = `rotate(${rotate}deg)`
})

homeBtn.addEventListener("click", () => {
    xPos = 0
    yPos = 0
    rotate = 0
    bug.style.top = `${yPos}px`
    bug.style.left = `${xPos}px`
    bug.style.transform = `rotate(${rotate}deg)`
})
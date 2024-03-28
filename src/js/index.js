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

upBtn.addEventListener("click", () => {
    if(xPos > 0) xPos -= 10
    bug.style.top = `${xPos}px`
})

downBtn.addEventListener("click", () => {
    if(xPos < 450) xPos += 10
    bug.style.top = `${xPos}px`
})

rightBtn.addEventListener("click", () => {
    if(yPos < 450) yPos += 10
    bug.style.left = `${yPos}px`
})

leftBtn.addEventListener("click", () => {
    if(yPos > 0) yPos -= 10
    bug.style.left = `${yPos}px`
})
let clutter;
function makeBubbles() {
    clutter = document.querySelector(".bubbles-wrapper");
    for (let i = 1; i <= 168; i++) {
        let randomNum = Math.floor(Math.random() * 10);
        let bubbles = `<div onclick="checkScore(this)" class="bubble">${randomNum}</div>`;
        clutter.innerHTML += bubbles;
    }
}
makeBubbles();

let timer = 60;

function timerSet() {
    let intervel = setInterval(() => {
        if (timer <= 0) {
            clearInterval(intervel);
            clutter.innerHTML = `<h1>Game Over</h1>`
        }
        else {
            timer--;
            document.querySelector(".timer").textContent = timer;
        }
    }, 1000)
}
timerSet();
let randomhitNum;

function makeHit() {
    randomhitNum = Math.floor(Math.random() * 10);
    document.querySelector(".hit").textContent = randomhitNum;
}
makeHit();

let score = document.querySelector(".score");
let scoreRecord = 0;
function checkScore(clickBubble) {

    let clickBubbleNum = Number(clickBubble.textContent);
    if (clickBubbleNum === randomhitNum) {
        scoreRecord += 10;
        score.textContent = scoreRecord;
    }
    clutter.innerHTML = "";
    makeHit();
    makeBubbles();
}

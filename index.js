let firstScore = document.getElementById("score1");
let secondScore = document.getElementById("score2");
let initialFirstScore = 0;
let initialSecondScore = 0;
let time = document.getElementById("timer");
let timerInterval
let countdownDate = new Date().setSeconds(new Date().getSeconds() +  30);


function addOne() {
    initialFirstScore += 1;
    firstScore.innerHTML = initialFirstScore;   
}

function addTwo() {
    initialFirstScore += 2;
    firstScore.innerHTML = initialFirstScore;
}

function addThree() {
    initialFirstScore += 3
    firstScore.innerHTML = initialFirstScore;
}

function addOneGuest() {
    initialSecondScore += 1;
    secondScore.innerHTML = initialSecondScore;   
}

function addTwoGuest() {
    initialSecondScore += 2;
    secondScore.innerHTML = initialSecondScore;
}

function addThreeGuest() {
    initialSecondScore += 3;
    secondScore.innerHTML = initialSecondScore;
}

function timer() {
    const now = new Date().getTime();
    const countdown = new Date(countdownDate).getTime();
    const difference = Math.round((countdown - now)/1000);
    time.innerHTML = difference; 
    if (difference === 0){
        time.innerHTML = 30;
        setTimeout(clearInterval(timerInterval), 3000);
    }
}

onload = (e) => {
    setTimeout(timerInterval = setInterval(timer, 1000), 3000);
}

function clearScore() {
    initialFirstScore =  0;
    initialSecondScore = 0;
    firstScore.innerHTML = 0;
    secondScore.innerHTML = 0;
}



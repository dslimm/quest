const allCards = document.querySelectorAll(".cards");

for (let i = 0; i < allCards.length; i++) {
  const step = allCards[i];
  setInterval(function () {
    step.innerText = getRandomNumber(99);
  }, getRandomNumber(400) + 400);
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

const tmr = document.querySelector(".timerCard");
let sec = 0;
let min = 0;

let timer = setInterval(function () {
    if (sec < 60) {
      (sec++);
      if (sec === 60) {
          (sec = 0);
          (min++);
      };
      (tmr.innerText = "Время тикает... " + min + ":" + sec);
    }
}, 1000)

function speedConverter() {
    let z = document.getElementById("pass").value;
    if (z == "259") {
            clearInterval(timer),
            (tmr.innerText = "Верно! " + min + ":" + sec),
            (tmr.style.fontSize = "2em");
            setTimeout(function() {
                window.location = "/quest/level2/stage1/stage1.html";
        }, 2000);
    }
        return false;}

const allCards = document.querySelectorAll(".cards");

for (let i = 0; i < allCards.length; i++) {
    let card = allCards[i];
    card.onclick = function() {
            card.innerText = "";
        }
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
    if (z == "весна" || z == "Весна" || z == "ВЕСНА") {
            clearInterval(timer),
            (tmr.innerText = "Готово! " + min + ":" + sec),
            (tmr.style.fontSize = "2em");
            setTimeout(function() {
              window.location = "/quest/level3/stage3/stage3.html";
        }, 2000);
    }
        return false;}
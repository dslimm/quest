const allCards = document.querySelectorAll(".cards");
let myInput = document.querySelector(".passCard");

for (let i = 0; i < allCards.length; i++) {
    allCards[i].onclick = function() {
            myInput.innerText = allCards[i].dataset.text;
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
    if (z == "на луне" || z == "На луне" || z == "На Луне" || z == "НА ЛУНЕ" || z == "луна" || z == "Луна" || z == "ЛУНА") {
            clearInterval(timer),
            (tmr.innerText = "Верно! " + min + ":" + sec),
            (tmr.style.fontSize = "2em");
            setTimeout(function() {
                    window.location = "/quest/level4/stage5/stage5.html";
            }, 2000);
    }
        return false;}
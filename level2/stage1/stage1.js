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

const allCards = document.querySelectorAll(".cards");
let myInput = document.querySelector(".passCard");

for (let i = 0; i < allCards.length; i++) {
    let card = allCards[i];
    card.onclick = function() {
        let key = card.innerText;
        myInput.onclick = function() {
            myInput.innerText = "";
        }
        myInput.innerText = myInput.innerText + key;
            if (myInput.innerText == "8265371") {
                clearInterval(timer),
                (tmr.innerText = "Верно! " + min + ":" + sec),
                (tmr.style.fontSize = "2em");
                setTimeout(function() {
                    window.location = "/quest/level2/stage2/stage2.html";
                }, 2000);
            }
                return false;
    }
}


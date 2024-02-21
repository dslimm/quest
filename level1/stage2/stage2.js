const allCards = document.querySelectorAll(".cards");

for (let i = 0; i < allCards.length; i++) {
  const step = allCards[i];
    step.addEventListener("click", function () {
      setInterval(function () {
        step.innerText = getRandomAlphabet();
        (step.style.color = "darkred");
      }, 800);
    });
}

function getRandomAlphabet() {
  const alphabet = "МОЛОКО";
  return alphabet[Math.floor(Math.random() * alphabet.length)]
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
    if (z == "молоко" || z == "Молоко" || z == "МОЛОКО") {
            clearInterval(timer),
            (tmr.innerText = "Верно! " + min + ":" + sec),
            (tmr.style.fontSize = "2em");
            setTimeout(function() {
              window.location = "/quest/level1/stage3/stage3.html";
        }, 2000);
    }
        return false;}

const allcards = document.querySelectorAll(".cards");

for (let i = 0; i < allcards.length; i++) {
  const step = allcards[i];
  step.addEventListener("click", function() {
      if (!step.classList.contains("cards-style2")) {
        step.classList.add("cards-style2");
      } else if (!step.classList.contains("cards-style3")) {
        step.classList.add("cards-style3");
      } else if (!step.classList.contains("cards-style4")) {
        step.classList.add("cards-style4");
      } else if (!step.classList.contains("cards-style5")) {
        step.classList.add("cards-style5");
      }
      else {
        step.classList.remove("cards-style2");
        step.classList.remove("cards-style3");
        step.classList.remove("cards-style4");
        step.classList.remove("cards-style5");
      }
    });
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
  if (z == "206408") {
            clearInterval(timer),
            (tmr.innerText = "Верно! " + min + ":" + sec),
            (tmr.style.fontSize = "2em");
            setTimeout(function() {
              window.location = "/quest/level1/stage4/stage4.html";
      }, 2000);
  }
      return false;}
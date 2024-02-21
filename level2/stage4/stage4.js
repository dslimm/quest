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

for (let i = 0; i < allCards.length; i++) {
    let noCard = allCards[i];
    noCard.onclick = function() {
         myInput.innerText = noCard.innerText;
        }
    }

const keyCard = document.querySelector(".card9");
let myInput = document.querySelector(".passCard");
        keyCard.onclick = function() {
            myInput.innerText = "";
            let key = keyCard.innerText;
            myInput.innerText = myInput.innerText + key;
                if (myInput.innerText == "Россия") {
                    clearInterval(timer),
                    (tmr.innerText = "Верно! " + min + ":" + sec),
                    (tmr.style.fontSize = "2em");
                    setTimeout(function() {
                        window.location = "/quest/level2/stage5/stage5.html";
                    }, 2000);
                }
                    return false;
        }
    
myInput.onclick = function() {
            myInput.innerText = "";
        }
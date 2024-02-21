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
        if (z == "713") {
            clearInterval(timer),
            (tmr.innerText = "Верно! " + min + ":" + sec),
            (tmr.style.fontSize = "2em");
            setTimeout(function() {
                window.location = "/quest/level1/stage2/stage2.html";
            }, 2000);
        }
            return false;}

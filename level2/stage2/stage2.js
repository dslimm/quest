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
        if (z == "календарь" || z == "Календарь" || z == "КАЛЕНДАРЬ") {
            clearInterval(timer),
            (tmr.innerText = "Верно! " + min + ":" + sec),
            (tmr.style.fontSize = "2em");
            setTimeout(function() {
                window.location = "/quest/level2/stage3/stage3.html";
            }, 2000);
        }
            return false;}

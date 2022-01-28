window.onload = function() {
var sec = 0;
var min = 0;
var appendsecs = document.getElementById("secs");
var appendmins = document.getElementById("mins");
var start = document.getElementById("Start-button");
var stop = document.getElementById("Stop-button");
var reset = document.getElementById("Reset-button");
var time;

start.onclick = function() {
    clearInterval(time);
    time = setInterval(startTimer, 10);
}
stop.onclick = function() {
    clearInterval(time);
}
reset.onclick = function() {
    clearInterval(time);
    sec = "00";
    min = "00";
    appendsecs.innerHTML = sec;
    appendmins.innerHTML = min;
}

function startTimer() {
    sec++;
    if (sec <= 9) {
        appendsecs.innerHTML = "0" + sec;
    }

    if (sec > 9 && sec < 60) {
        appendsecs.innerHTML = sec;
    }

    if (sec >= 60) {
        min++;
        appendmins.innerHTML = "0" + min;
        sec = 0;
        appendsecs.innerHTML = "0" + sec;
    }
    
    if (min > 9){
        appendmins.innerHTML = min;
      }
}
}
var min = 00;
var sec = 00;
var msec = 00;
var minHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var msecHeading = document.getElementById("msec")

var interval;

function timer(){
                msec++
                msecHeading.innerHTML = msec
    if(msec >= 100){
        sec++
        secHeading.innerHTML = sec
        msec=0
    }
    else if(sec>=60){
        min++
        minHeading.innerHTML = min
        sec = 0
    }
}
function start(){
interval =    setInterval(timer,10)
var start = document.getElementById("start")
start.disabled = true
start.style.color = "Black"
start.style.backgroundColor = "Red"
var pause = document.getElementById("stop")
pause.style.backgroundColor = "transparent"
var reset = document.getElementById("reset")
    reset.style.backgroundColor = "transparent"

}


function pause(){
    clearInterval(interval)
    var start = document.getElementById("start")
    start.disabled = false
    var pause = document.getElementById("stop")
    pause.style.backgroundColor = "Red"
    start.style.backgroundColor = "transparent"
    var reset = document.getElementById("reset")
    reset.style.backgroundColor = "transparent"
}

function reset(){
    min="00"
    sec="00"
    msec="00"
    minHeading.innerHTML = min
    secHeading.innerHTML = sec
    msecHeading.innerHTML = msec
    clearInterval(interval);
    var start = document.getElementById("start")
    start.disabled = false
    var reset = document.getElementById("reset")
    var pause = document.getElementById("stop")
    var start = document.getElementById("start")

    reset.style.backgroundColor = "red"
    start.style.backgroundColor = "transparent"
    pause.style.backgroundColor = "transparent"

}
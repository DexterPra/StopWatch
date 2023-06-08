// variables 

const startStopBtn = document.querySelector("#startStopBtn")
const reset = document.querySelector("#resetBtn")

// variable for timers

let seconds = 0
let minutes = 0
let hours  = 0

// Variables for time intervals

let timeStop = null
let timeStatus = "stopped"

function stopWatch() {
    seconds++

    if (seconds/60 === 1) {
        seconds = 00
        minutes++
    }
    
    if (minutes/60 === 1) {
        minutes = 00
        hours++
    }

    let lastSecond = 0
    let lastMinutes = 0
    let lastHours = 0

    if(seconds<10){
        lastSecond = "0"+ seconds.toString()    }
        else{
            lastSecond = seconds
        }
    if(minutes<10){
        lastMinutes = "0"+ minutes.toString()    }
        else{
            lastMinutes = minutes
        }
    if(seconds<10){
        lastHours = "0"+ hours.toString()    
        }
        else{
            lastHours = hours
        }
        

    let displayTimer = document.getElementById("timer").innerText= lastHours + ":" + lastMinutes + ":" + lastSecond
}

startStopBtn.addEventListener("click", function(){
    if(timeStatus === "stopped"){
        timeStop = window.setInterval(stopWatch, 1000)
        startStopBtn.innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>'
        timeStatus = "started"
        // document.querySelector(".container").style.backgroundColor = "transparent"
    }
    else{
        window.clearInterval(timeStop)
        startStopBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>'
        timeStatus = "stopped"
        // document.querySelector(".container").style.backgroundColor = "white"
    }

})

reset.addEventListener("click", function(){
    window.clearInterval(timeStop)
    seconds = 0
    minutes = 0
    hours = 0
    document.getElementById("timer").innerHTML = "00:00:00"
})
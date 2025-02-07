let timer;

let totalSeconds;

function startTimer() {
    let minutes = document.getElementById("minutes").value;
    let seconds = document.getElementById("seconds").value;
    totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);


    if (isNaN(totalSeconds) || totalSeconds <= 0) {
        alert("Please enter a valid time!");
        return;
    }


    clearInterval(timer);
    updateDisplay();

    
    timer = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timer);
            alert("Time's up!");
        } else {
            totalSeconds--;
            updateDisplay();
        }
    }, 1000);
}



function updateDisplay() {
    let min = Math.floor(totalSeconds / 60);
    let sec = totalSeconds % 60;
    document.getElementById("timerDisplay").textContent = 
        (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
}









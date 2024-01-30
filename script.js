let intervalId = null;
let timeInSeconds = 3;
let clickSound  = new Audio('click.mp3');
let restartSound = new audio('restart.wav');
var focusSession = true;

function startTimer() { 
    clickSound.play();
    if (intervalId) {
        return; 
    }

    intervalId = setInterval(() => {
        timeInSeconds -= 1;
        updateDisplay();
        if (timeInSeconds <= 0) {
            stopTimer();
        }
    }, 1000);
}

function pauseTimer() {
    clickSound.play();
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function resetTimer() { 
    updateBackground();
   if (focusSession) {
       timeInSeconds = 25 * 60; 
       
    } else {
        timeInSeconds = 5 * 60;
       
    } 
    pauseTimer();
    focusSession = !focusSession;
   
    updateDisplay();
}

function updateDisplay() {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const displayElement = document.getElementById('timer-display');
    displayElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (timeInSeconds < 0) {
        focusSession = !focusSession;
        // endSound.play();
       // alert('Time is up!');
        notifyMe();
        resetTimer();
        startTimer();
    }
}

function updateBackground() {
    const body = document.querySelector('body');
    if (focusSession) {
        body.style.backgroundColor = '#2e0b0b';
    } else {
        body.style.backgroundColor = '#1d5c2e';
    }
}

function notifyMe() {
  
    if (!("Notification" in window)) {
        alert("Este navegador não suporta notificações de sistema");
    }

    else if (Notification.permission === "granted") {
        var notification = new Notification("Tempo esgotado!");
    }

    else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                var notification = new Notification("Tempo esgotado!");
            }
        });
    }

}
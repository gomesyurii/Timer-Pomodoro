let intervalId = null;
let timeInSeconds = 3
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
    focusSession = !focusSession;
   if (focusSession) {
       timeInSeconds = 25 * 60; 
       pauseTimer();
    } else {
        timeInSeconds = 5 * 60;
        pauseTimer();  
    }
    updateDisplay();
}

function updateDisplay() {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const displayElement = document.getElementById('timer-display');
    displayElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (timeInSeconds < 0) {
        // endSound.play();
        alert('Time is up!');
        resetTimer();
        focusSession = !focusSession;
        startTimer();
    }
}

function updateBackground() {
    const body = document.querySelector('body');
    if (focusSession) {
        body.style.backgroundColor = '#f2f2f2';
    } else {
        body.style.backgroundColor = '#f2f2f2';
    }
}


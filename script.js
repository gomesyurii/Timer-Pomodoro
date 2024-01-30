let intervalId = null;
let timeInSeconds = 25 * 60; 

function startTimer() {
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
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function resetTimer() {
    pauseTimer();
    timeInSeconds = 25 * 60;
    updateDisplay();
}

function updateDisplay() {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const displayElement = document.getElementById('timer-display');
    displayElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
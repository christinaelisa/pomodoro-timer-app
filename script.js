const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

document.getElementById("timer").textContent = "25:00";
let timeLeft = 25 * 60;
let timerInterval = null;

function startTimer() {
  if (timerInterval) {
    console.log("timer already running");
    return;
  }

  timerInterval = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    let displayMinutes = `${String(minutes).padStart(2, "0")}`;
    let displaySeconds = `${String(seconds).padStart(2, "0")}`;
    let updatedDisplay = displayMinutes + ":" + displaySeconds;
    document.getElementById("timer").textContent = updatedDisplay;
    console.log(updatedDisplay);

    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function pauseTimer() {
  console.log("pause timer");
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  document.getElementById("timer").textContent = "25:00";
  timeLeft = 25 * 60;
  console.log("reset timer");
}

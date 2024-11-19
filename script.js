const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

document.getElementById("timer").textContent = "25:00";
let timeLeft = 25 * 60;
let timerInterval = null;
let isPaused = false;

function updateUI() {
  document.getElementById("timer").textContent = "25:00";
  let timeLeft = 25 * 60;
}

function startTimer() {
  if (timerInterval && isPaused == false) {
    console.log("timer already running");
    return;
  }

  timerInterval = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let updatedDisplay =
      `${String(minutes).padStart(2, "0")}` +
      ":" +
      `${String(seconds).padStart(2, "0")}`;
    document.getElementById("timer").textContent = updatedDisplay;
    console.log(updatedDisplay);

    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      resetTimer();
    }
  }, 1000);
  console.log("start timer");
}

function pauseTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    isPaused = true;
    console.log("pause timer");
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  updateUI();
  console.log("reset timer");
}

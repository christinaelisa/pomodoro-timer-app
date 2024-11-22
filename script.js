const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

document.getElementById("timer").textContent = "25:00";
let timeLeft = 25 * 60;
let breakTime = 5 * 60;
let timerInterval = null;
let isPaused = false;

function startTimer() {
  if (timerInterval && isPaused == false) {
    console.log("timer interval already created");
    return;
  } else if (timerInterval == null || (timerInterval && isPaused == true)) {
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
}

function pauseTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    isPaused = true;
    console.log("pause timer");
    console.log(timeLeft);
  } else if (timerInterval == null) {
    console.log("nothing to pause");
    return;
  }
}

function resetTimer() {
  if (timerInterval == null) {
    console.log("no need to reset");
    return;
  } else if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
    isPaused == false;
    document.getElementById("timer").textContent = "25:00";
    timeLeft = 25 * 60;
    console.log(timeLeft + " seconds remaining");
  }
}

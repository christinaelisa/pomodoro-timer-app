const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

startBtn.addEventListener("click", startTimer);
document.getElementById("timer").textContent = "25:00";
let timeLeft = 25 * 60;

function startTimer() {
  timerInterval = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    let displayMinutes = `${String(minutes).padStart(2, "0")}`;
    let displaySeconds = `${String(seconds).padStart(2, "0")}`;
    let updatedDisplay = displayMinutes + ":" + displaySeconds;
    document.getElementById("timer").textContent = updatedDisplay;
    console.log(updatedDisplay);

    timeLeft--;

    if (timeLeft <= 1480) {
      clearInterval(timerInterval);
      isPommin = false;
    }
  }, 1000);
}

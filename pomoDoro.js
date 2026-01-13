let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let timer = document.querySelector(".timer");
let start = document.querySelector(".startbtn");
let reset = document.querySelector("#reset");
let settings = document.querySelector("#settings");
let totalSeconds = 0;
let settingsCard = document.querySelector(".settings-container");
let timerId = null;
let closeBtn=document.querySelector(".close");

function updateDisplay() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  if (seconds < 10) seconds = "0" + seconds;
  timer.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (timerId !== null) return;

  timerId = setInterval(() => {
    if (totalSeconds <= 0) {
      pauseTimer();
      start.textContent = "Start";
      return;
    }

    totalSeconds--;
    updateDisplay();
  }, 1000);
}
function pauseTimer() {
  clearInterval(timerId);
  timerId = null;
}
reset.addEventListener("click", function () {
  window.location.reload();
})
btn1.addEventListener("click", () => {
  pauseTimer();
  totalSeconds = 25 * 60;
  updateDisplay();
  start.textContent = "Start";
});

btn2.addEventListener("click", () => {
  pauseTimer();
  totalSeconds = 5 * 60;
  updateDisplay();
  start.textContent = "Start";
});

btn3.addEventListener("click", () => {
  pauseTimer();
  totalSeconds = 10 * 60;
  updateDisplay();
  start.textContent = "Start";
});
start.addEventListener("click", () => {
  if (timerId === null) {
    start.textContent = "Pause";
    startTimer();
  } else {
    start.textContent = "Start";
    pauseTimer();
  }
});
settings.addEventListener("click", () => {
  settingsCard.removeAttribute("style");
});

closeBtn.addEventListener("click", () => {
  settingsCard.style.display="none";
});
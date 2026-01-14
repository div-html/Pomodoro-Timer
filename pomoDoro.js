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
let audio=document.querySelector("audio");
let theme=document.querySelector("#theme1");

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
      audio.volume=0.5;
      audio.play(); 
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
theme.addEventListener("change",function(){
  let body=document.querySelector("body");
  console.log(this.value);
  if(this.value==1){
  document.body.style.backgroundImage="url('https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg')"
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.overflow="hidden";
  }
  else if(this.value==2){
  document.body.style.backgroundImage =
  "url('https://images.pexels.com/photos/20193437/pexels-photo-20193437.jpeg')";

  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.overflow="hidden";
  }
  else if(this.value==3){
  document.body.style.backgroundImage =
  "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
    
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.overflow="hidden";
  }
});
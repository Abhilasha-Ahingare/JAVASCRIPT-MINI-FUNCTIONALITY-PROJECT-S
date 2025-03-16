const timers = document.getElementById("timer");

function timerCounting() {
  let timer = new Date();
  let hours = timer.getHours();
  let min = timer.getMinutes();
  let second = timer.getSeconds();
  timers.textContent = `${hours}: ${min} : ${second}`;
}
setInterval(timerCounting, 1000);

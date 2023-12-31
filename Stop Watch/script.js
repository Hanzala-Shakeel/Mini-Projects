// StopWatch

// For showing stop watch variables on DOM
var hours = document.getElementById("hour");
var minutes = document.getElementById("minute");
var seconds = document.getElementById("second");
var milliSeconds = document.getElementById("milliSecond");

// Buttons to control the stopwatch
var btnStart = document.getElementById("btnStart");

var interval,
  currentHours = 1,
  currentMilliSecond = 0,
  currentSecond = 1,
  currentMinute = 1;

function stopWatch() {
  if (currentMilliSecond == 59) {
    seconds.innerHTML = currentSecond;
    currentSecond++;
    currentMilliSecond = 0;
  } else if (currentSecond == 59) {
    minutes.innerHTML = currentMinute;
    currentMinute++;
    currentSecond = 0;
    currentMilliSecond = 0;
  } else if (currentMinute == 59) {
    hours.innerHTML = currentHours;
    currentHours++;
    currentMinute = 0;
    currentSecond = 0;
    currentMilliSecond = 0;
  } else {
    milliSeconds.innerHTML = currentMilliSecond;
    currentMilliSecond++;
  }
}

function start() {
  console.log("start");
  interval = setInterval(stopWatch, 20);
  btnStart.disabled = true;
}

function stop() {
  console.log("stop");
  clearInterval(interval);
  btnStart.disabled = false;
}

function reset() {
  console.log("reset");
  milliSeconds.innerHTML = 0;
  seconds.innerHTML = 0;
  minutes.innerHTML = 0;
  hours.innerHTML = 0;
  currentHours = 1;
  currentMilliSecond = 0;
  currentSecond = 1;
  currentMinute = 1;
  btnStart.disabled = false;
  clearInterval(interval);
}

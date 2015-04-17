var timerId = -1;
var interval = 25;
var ms = 0;
var seconds = 0;
var minutes = 0;
var startTimer = function () {
    if (timerId === -1) {
        timerId = window.setInterval('turnTimerOn()', interval);
    }
};
var displayTimer = function () {
    document.getElementById('milliseconds').innerHTML = ms.toString();
    document.getElementById('seconds').innerHTML = seconds.toString();
    document.getElementById('minutes').innerHTML = minutes.toString();
};
displayTimer();
var pauseTimer = function () {
    window.clearInterval(timerId);
    timerId = -1;
};
var clearTimer = function () {
    pauseTimer();
    ms = 0;
    seconds = 0;
    minutes = 0;
    displayTimer();
};
var init = function (startButton, pauseButton, clearButton) {
    document.getElementById(startButton).addEventListener("click", startTimer, false);
    document.getElementById(pauseButton).addEventListener("click", pauseTimer, false);
    document.getElementById(clearButton).addEventListener("click", clearTimer, false);
    displayTimer();
};
function turnTimerOn() {
    ms += interval;
    if (ms >= 1000) {
        ms = 0;
        seconds += 1;
    }
    if (seconds >= 60) {
        ms = 0;
        seconds = 0;
        minutes += 1;
    }
    displayTimer();
}
exports.turnTimerOn = turnTimerOn;
;
window.onload = function () {
    init('startButton', 'pauseButton', 'clearButton');
};

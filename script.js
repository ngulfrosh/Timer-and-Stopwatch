// Timer variables
let timerInterval;
let timerTime = 0;
let timerRunning = false;

// Stopwatch variables
let stopwatchInterval;
let stopwatchTime = 0;
let stopwatchRunning = false;

// Get references to HTML elements
const timerDisplay = document.getElementById('timerDisplay');
const startTimerButton = document.getElementById('startTimerButton');
const resetTimerButton = document.getElementById('resetTimerButton');

const stopwatchDisplay = document.getElementById('stopwatchDisplay');
const startStopwatchButton = document.getElementById('startStopwatchButton');
const resetStopwatchButton = document.getElementById('resetStopwatchButton');

// Add event listeners to the timer buttons
startTimerButton.addEventListener('click', toggleTimer);
resetTimerButton.addEventListener('click', resetTimer);

// Add event listeners to the stopwatch buttons
startStopwatchButton.addEventListener('click', toggleStopwatch);
resetStopwatchButton.addEventListener('click', resetStopwatch);

// Timer functions
function toggleTimer() {
  if (timerRunning) {
    stopTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  timerRunning = true;
  startTimerButton.textContent = 'Stop';
  startTimerButton.style.backgroundColor = '#f54e4e';
  resetTimerButton.disabled = true;

  timerInterval = setInterval(function() {
    timerTime++;
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  timerRunning = false;
  startTimerButton.textContent = 'Start';
  startTimerButton.style.backgroundColor = '#4caf50';
  resetTimerButton.disabled = false;

  clearInterval(timerInterval);
}

function resetTimer() {
  stopTimer();
  timerTime = 0;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const hours = Math.floor(timerTime / 3600);
  const minutes = Math.floor((timerTime % 3600) / 60);
  const seconds = timerTime % 60;

  timerDisplay.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Stopwatch functions
function toggleStopwatch() {
  if (stopwatchRunning) {
    stopStopwatch();
  } else {
    startStopwatch();
  }
}

function startStopwatch() {
  stopwatchRunning = true;
  startStopwatchButton.textContent = 'Stop';
  startStopwatchButton.style.backgroundColor = '#f54e4e';
  resetStopwatchButton.disabled = true;

  stopwatchInterval = setInterval(function() {
    stopwatchTime++;
    updateStopwatchDisplay();
  }, 10);
}

function stopStopwatch() {
  stopwatchRunning = false;
  startStopwatchButton.textContent = 'Start';
  startStopwatchButton.style.backgroundColor = '#4caf50';
  resetStopwatchButton.disabled = false;

  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  stopStopwatch();
  stopwatchTime = 0;
  updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
  const minutes = Math.floor(stopwatchTime / 6000);
  const seconds = Math.floor((stopwatchTime % 6000) / 100);
  const milliseconds = stopwatchTime % 100;

  stopwatchDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
}

// Helper function to format time values with leading zeros
function formatTime(time) {
  return time.toString().padStart(2, '0');
}

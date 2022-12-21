const target = document.getElementById('target');
const time = document.getElementById('time');
const score = document.getElementById('score');
const startButton = document.getElementById('start-button');

let timer;
let totalTime = 10;
let currentScore = 0;

// Set the maximum x and y positions for the target
const maxX = 600 - 50; // 50 is the width of the target
const maxY = 600 - 50; // 50 is the height of the target

function moveTarget() {
  // Get a random x and y position within the 800x800 square
  const x = Math.floor(Math.random() * (maxX + 1));
  const y = Math.floor(Math.random() * (maxY + 1));

  // Set the target's new position
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
}

function updateTime() {
  time.textContent = totalTime;
  totalTime--;

  // If the timer has run out, end the game
  if (totalTime < 0) {
    clearInterval(timer);
    target.style.display = 'none';
    startButton.style.display = 'block';
    alert(`Time's up! Your final score is ${currentScore}.`);
  }
}

function startGame() {
  // Hide the start button and show the target
  startButton.style.display = 'none';
  target.style.display = 'block';

  // Reset the time and score
  totalTime = 10;
  currentScore = 0;

  // Set the timer to update the time every second
  timer = setInterval(updateTime, 1000);

  // Move the target to a random position within the 800x800 square
  moveTarget();
}

startButton.addEventListener('click', startGame);

target.addEventListener('click', () => {
  // Increase the score and move the target
  currentScore++;
  score.textContent = currentScore;
  moveTarget();
});
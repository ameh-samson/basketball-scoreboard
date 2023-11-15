let homeScore = document.getElementById("home-point-text");
let guestScore = document.getElementById("guest-point-text");

console.log(homeScore);
console.log(guestScore);

let score = 0;

// home
function homePlusOne() {
  score += 1;
  homeScore.textContent = score;
}
function homePlusTwo() {
  score += 2;
  homeScore.textContent = score;
}

function homePlusThree() {
  score += 3;
  homeScore.textContent = score;
}

// guest

let score2 = 0;
function guestPlusOne() {
  score2 += 1;
  guestScore.textContent = score2;
}
function guestPlusTwo() {
  score2 += 2;
  guestScore.textContent = score2;
}

function guestPlusThree() {
  score2 += 3;
  guestScore.textContent = score2;
}

// resetGame
function resetGame() {
  homeScore.textContent = 0;
  guestScore.textContent = 0;
}

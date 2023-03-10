
// Hide the 20 line elements initially
const line1 = document.getElementById('20-line-one');
line1.style.display = 'none';

const line2 = document.getElementById('20-line-two');
line2.style.display = 'none';

const line3 = document.getElementById('20-line-three');
line3.style.display = 'none';

// Define the Player object
function Player(name, score, twenty, nineteen, eighteen, seventeen, sixteen, fifteen, bull) {
  this.name = name;
  this.score = score;
  this.twenty = twenty;
  this.nineteen = nineteen;
  this.eighteen = eighteen;
  this.seventeen = seventeen;
  this.sixteen = sixteen;
  this.fifteen = fifteen;
  this.bull = bull;
}

// Example usage
const player1 = new Player('Player 1', 0, 0, 0, 0, 0, 0, 0, 0);
const player2 = new Player('Player 2', 0, 0, 0, 0, 0, 0, 0, 0);

// Update a player's score
player1.score += 10;

// Set the players' names to the column names
const name1 = document.getElementById('name-1');
name1.textContent = player1.name;
const name2 = document.getElementById('name-2');
name2.textContent = player2.name;

// Set the players scores to column scores
const score1 = document.getElementById('player-score-1')
score1.textContent = player1.score;
const score2 = document.getElementById('player-score-2')
score2.textContent = player2.score;

// Add an event listener to the +20 button
const first20Btn = document.getElementById('first-20');
first20Btn.addEventListener('click', function() {
  player1.twenty += 1;
  if (player1.twenty === 1) {
    document.getElementById('20-line-one').style.display = 'block';
  } else if (player1.twenty === 2) {
    document.getElementById('20-line-two').style.display = 'block';
  } else if (player1.twenty >= 3) {
    document.getElementById('20-line-three').style.display = 'block';
  }
  if (player1.twenty > 3) {
    player1.score += 20;
  }
  document.getElementById('player-score-1').textContent = player1.score;
});

// Add player form submission handler
const addPlayerForm = document.getElementById('add-player-form');
const playerNameField = document.getElementById('player-name-form-field');
const addPlayerButton = document.getElementById('add-player-button');
let currentPlayer = 1;
addPlayerButton.addEventListener('click', function(e) {
  e.preventDefault();
  if (currentPlayer === 1) {
    player1.name = playerNameField.value;
    name1.textContent = player1.name;
    currentPlayer = 2;
  } else {
    player2.name = playerNameField.value;
    name2.textContent = player2.name;
    currentPlayer = 1;
  }
  playerNameField.value = '';
});





// Hide all lines on page
const elements = document.querySelectorAll('[line]');
for (let i = 0; i < elements.length; i++) {
  elements[i].style.display = 'none';
}


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
const player3 = new Player('Player 3', 0, 0, 0, 0, 0, 0, 0, 0);
const player4 = new Player('Player 4', 0, 0, 0, 0, 0, 0, 0, 0);
const player5 = new Player('Player 5', 0, 0, 0, 0, 0, 0, 0, 0);
const player6 = new Player('Player 6', 0, 0, 0, 0, 0, 0, 0, 0);


// Set the players' names to the column names
const name1 = document.getElementById('name-1');
name1.textContent = player1.name;
const name2 = document.getElementById('name-2');
name2.textContent = player2.name;
const name3 = document.getElementById('name-3');
name3.textContent = player3.name;
const name4 = document.getElementById('name-4');
name4.textContent = player4.name;
const name5 = document.getElementById('name-5');
name5.textContent = player5.name;
const name6 = document.getElementById('name-6');
name6.textContent = player6.name;

// Set the players scores to column scores
const score1 = document.getElementById('player-score-1')
score1.textContent = player1.score;
const score2 = document.getElementById('player-score-2')
score2.textContent = player2.score;
const score3 = document.getElementById('player-score-3')
score3.textContent = player3.score;
const score4 = document.getElementById('player-score-4')
score4.textContent = player4.score;
const score5 = document.getElementById('player-score-5')
score5.textContent = player5.score;
const score6 = document.getElementById('player-score-6')
score6.textContent = player6.score;



// Player 1 buttons
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

const first19Btn = document.getElementById('first-19');
first19Btn.addEventListener('click', function() {
  player1.nineteen += 1;
  if (player1.nineteen === 1) {
    document.getElementById('19-line-one').style.display = 'block';
  } else if (player1.nineteen === 2) {
    document.getElementById('19-line-two').style.display = 'block';
  } else if (player1.twenty >= 3) {
    document.getElementById('19-line-three').style.display = 'block';
  }
  if (player1.nineteen > 3) {
    player1.score += 19;
  }
  document.getElementById('player-score-1').textContent = player1.score;
});

const first18Btn = document.getElementById('first-18');
first18Btn.addEventListener('click', function() {
  player1.eighteen += 1;
  if (player1.eighteen === 1) {
    document.getElementById('18-line-one').style.display = 'block';
  } else if (player1.eighteen === 2) {
    document.getElementById('18-line-two').style.display = 'block';
  } else if (player1.eighteen >= 3) {
    document.getElementById('18-line-three').style.display = 'block';
  }
  if (player1.eighteen > 3) {
    player1.score += 18;
  }
  document.getElementById('player-score-1').textContent = player1.score;
});

const first17Btn = document.getElementById('first-17');
first17Btn.addEventListener('click', function() {
  player1.seventeen += 1;
  if (player1.seventeen === 1) {
    document.getElementById('17-line-one').style.display = 'block';
  } else if (player1.seventeen === 2) {
    document.getElementById('17-line-two').style.display = 'block';
  } else if (player1.seventeen >= 3) {
    document.getElementById('17-line-three').style.display = 'block';
  }
  if (player1.seventeen > 3) {
    player1.score += 17;
  }
  document.getElementById('player-score-1').textContent = player1.score;
});

const first16Btn = document.getElementById('first-16');
first16Btn.addEventListener('click', function() {
  player1.sixteen += 1;
  if (player1.sixteen === 1) {
    document.getElementById('16-line-one').style.display = 'block';
  } else if (player1.sixteen === 2) {
    document.getElementById('16-line-two').style.display = 'block';
  } else if (player1.sixteen >= 3) {
    document.getElementById('16-line-three').style.display = 'block';
  }
  if (player1.sixteen > 3) {
    player1.score += 16;
  }
  document.getElementById('player-score-1').textContent = player1.score;
});

const first15Btn = document.getElementById('first-15');
first15Btn.addEventListener('click', function() {
  player1.fifteen += 1;
  if (player1.fifteen === 1) {
    document.getElementById('15-line-one').style.display = 'block';
  } else if (player1.fifteen === 2) {
    document.getElementById('15-line-two').style.display = 'block';
  } else if (player1.fifteen >= 3) {
    document.getElementById('15-line-three').style.display = 'block';
  }
  if (player1.fifteen > 3) {
    player1.score += 15;
  }
  document.getElementById('player-score-1').textContent = player1.score;
});

const firstbullBtn = document.getElementById('first-bull');
firstbullBtn.addEventListener('click', function() {
  player1.bull += 1;
  if (player1.bull === 1) {
    document.getElementById('bull-line-one').style.display = 'block';
  } else if (player1.bull === 2) {
    document.getElementById('bull-line-two').style.display = 'block';
  } else if (player1.bull >= 3) {
    document.getElementById('bull-line-three').style.display = 'block';
  }
  if (player1.bull > 3) {
    player1.score += 25;
  }
  document.getElementById('player-score-1').textContent = player1.score;
});

// Player 2 (20 button)
const second20Btn = document.getElementById('second-20');
second20Btn.addEventListener('click', function() {
  player2.twenty += 1;
  if (player2.twenty === 1) {
    document.getElementById('2-20-line-one').style.display = 'block';
  } else if (player2.twenty === 2) {
    document.getElementById('2-20-line-two').style.display = 'block';
  } else if (player2.twenty >= 3) {
    document.getElementById('2-20-line-three').style.display = 'block';
  }
  if (player2.twenty > 3) {
    player2.score += 20;
  }
  document.getElementById('player-score-2').textContent = player2.score;
});

// Player 3 (20 button)
const third20Btn = document.getElementById('third-20');
third20Btn.addEventListener('click', function() {
  player3.twenty += 1;
  if (player3.twenty === 1) {
    document.getElementById('3-20-line-one').style.display = 'block';
  } else if (player3.twenty === 2) {
    document.getElementById('3-20-line-two').style.display = 'block';
  } else if (player3.twenty >= 3) {
    document.getElementById('3-20-line-three').style.display = 'block';
  }
  if (player3.twenty > 3) {
    player3.score += 20;
  }
  document.getElementById('player-score-3').textContent = player3.score;
});

// Player 4 (20 button)
const fourth20Btn = document.getElementById('fourth-20');
fourth20Btn.addEventListener('click', function() {
  player4.twenty += 1;
  if (player4.twenty === 1) {
    document.getElementById('4-20-line-one').style.display = 'block';
  } else if (player4.twenty === 2) {
    document.getElementById('4-20-line-two').style.display = 'block';
  } else if (player4.twenty >= 3) {
    document.getElementById('4-20-line-three').style.display = 'block';
  }
  if (player4.twenty > 3) {
    player4.score += 20;
  }
  document.getElementById('player-score-4').textContent = player4.score;
});

// Player 5 (20 button)
const fifth20Btn = document.getElementById('fifth-20');
fifth20Btn.addEventListener('click', function() {
  player5.twenty += 1;
  if (player5.twenty === 1) {
    document.getElementById('5-20-line-one').style.display = 'block';
  } else if (player5.twenty === 2) {
    document.getElementById('5-20-line-two').style.display = 'block';
  } else if (player5.twenty >= 3) {
    document.getElementById('5-20-line-three').style.display = 'block';
  }
  if (player5.twenty > 3) {
    player5.score += 20;
  }
  document.getElementById('player-score-5').textContent = player5.score;
});

// Player 6 (20 button)
const sixth20Btn = document.getElementById('sixth-20');
sixth20Btn.addEventListener('click', function() {
  player6.twenty += 1;
  if (player6.twenty === 1) {
    document.getElementById('6-20-line-one').style.display = 'block';
  } else if (player6.twenty === 2) {
    document.getElementById('6-20-line-two').style.display = 'block';
  } else if (player6.twenty >= 3) {
    document.getElementById('6-20-line-three').style.display = 'block';
  }
  if (player6.twenty > 3) {
    player6.score += 20;
  }
  document.getElementById('player-score-6').textContent = player6.score;
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
  } else if (currentPlayer === 2) {
    player2.name = playerNameField.value;
    name2.textContent = player2.name;
    currentPlayer = 3;
  } else if (currentPlayer === 3) {
    player3.name = playerNameField.value;
    name3.textContent = player3.name;
    currentPlayer = 4;
  } else if (currentPlayer === 4) {
    player4.name = playerNameField.value;
    name4.textContent = player4.name;
    currentPlayer = 5;
  } else if (currentPlayer === 5) {
    player5.name = playerNameField.value;
    name5.textContent = player5.name;
    currentPlayer = 6;
  } else {
    player6.name = playerNameField.value;
    name6.textContent = player6.name;
    currentPlayer = 1;
  }

  playerNameField.value = '';
});



'use strict';


// Selecting elements
const player0Element = document.querySelector('.player--1');
const player1Element = document.querySelector('.player--0');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing; 

// Starting Conditions
const startGame = function() {

scores = [0, 0];
currentScore = 0;
activePlayer = 0; 
playing = true; 

score0.textContent = 0;
score1.textContent = 0; 
diceElement.classList.add('hidden');
current0Element.textContent = 0;
current1Element.textContent = 0; 

    player0Element.classList.remove('player--winner');
    player1Element.classList.remove('player--winner');
    player0Element.classList.remove('player--active');
    player1Element.classList.add('player--active');
};

startGame();


const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0Element.classList.toggle('player--active');
        player1Element.classList.toggle('player--active');
};

// Rolling dice functionality
buttonRoll.addEventListener('click', function() {
    if (playing) {
    // Random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // Display Dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`

    // Check if dice rolled 1, if true switch to next player
    if (dice !== 1) {
        // currentScore = currentScore + dice; 
        currentScore += dice; 
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        
    } else {
        // Switch to next player
        switchPlayer();
    }
}
});

// Holding the current score
 buttonHold.addEventListener('click', function() {
    if (playing) { 
        diceElement.classList.add('hidden');

    // Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore; 

    document.getElementById(`score--${activePlayer}`).textContent = 
    scores[activePlayer];

    // Check if the player's Score is > 100
    if (scores[activePlayer] >= 100) {
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
        switchPlayer();
    } 
}
 });

//  Resetting the game
buttonNew.addEventListener('click', startGame);
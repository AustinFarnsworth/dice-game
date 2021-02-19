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

// Starting Conditions
score0.textContent = 0;
score1.textContent = 0; 
diceElement.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0; 

// Rolling dice functionality
buttonRoll.addEventListener('click', function() {
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
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0Element.classList.toggle('player--active');
        player1Element.classList.toggle('player--active');
    }
});

// Holding the current score
 buttonHold.addEventListener('click', function() {
    
 });

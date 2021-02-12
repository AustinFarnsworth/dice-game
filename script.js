'use strict';


// Selecting elements
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn-new');
const buttonRoll = document.querySelector('.btn-roll');
const buttonHold = document.querySelector('.btn-hold');

// Starting Conditions
score0.textContent = 0;
score1.textContent = 0; 
diceElement.classList.add('hidden');


buttonRoll.addEventListener('click', function() {
    // Random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // Display Dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`

    // Check if dice rolled 1, if true switch to next player
})

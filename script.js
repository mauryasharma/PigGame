'use strict';

const s = document.querySelectorAll('.score');
for (let i = 0; i < s.length; i++) {
  s[i].textContent = 0;
}
let player0Name = prompt('Enter the name of player 1');
console.log(player0Name);
let player1Name = prompt('Enter the name of player 2');
console.log(player1Name);
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0E = document.querySelector('#score--0');
const score1E = document.querySelector('#score--1');
const current0E = document.getElementById('current--0');
const current1E = document.getElementById('current--1');
const pic = document.querySelector('.dice');
const newG = document.querySelector('.btn--new');
const rollD = document.querySelector('.btn--roll');
const Hold = document.querySelector('.btn--hold');
let currScore = 0;
let currScore0 = 0;
let currScore1 = 0;
let activePlayer = 0;
let playing = true;
// console.log(typeof activePlayer);
document.querySelector('#name--0').textContent = player0Name;
document.querySelector('#name--1').textContent = player1Name;

score0E.textContent = 0;
score1E.textContent = 0;

const switchPlayer = function () {
  currScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = currScore;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

pic.classList.add('hidden');

rollD.addEventListener('click', function () {
  if (playing) {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    //   console.log(diceNumber);
    pic.classList.remove('hidden');
    pic.src = `dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
      //Add dice to current score
      currScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currScore;
    } else {
      switchPlayer();
    }
  }
});

Hold.addEventListener('click', function () {
  if (playing) {
    activePlayer === 0 ? (currScore0 += currScore) : (currScore1 += currScore);
    score0E.textContent = currScore0;
    score1E.textContent = currScore1;
    if (currScore0 >= 100 || currScore1 >= 100) {
      if (currScore0 >= 100) {
        player0.classList.add('player--winner');
        player0.classList.remove('player--active');
      } else if (currScore1 >= 100) {
        player1.classList.add('player--winner');
        player1.classList.remove('player--active');
      }
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

newG.addEventListener('click', function () {
  currScore = 0;
  currScore0 = 0;
  currScore1 = 0;
  activePlayer = 0;
  playing = true;
  score0E.textContent = 0;
  current0E.textContent = 0;
  score1E.textContent = 0;
  current1E.textContent = 0;
  pic.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
});

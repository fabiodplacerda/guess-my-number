'use strict';

// document.querySelector('.message').textContent = 'Correct number!';

let score = 20;
let highScore = 0;

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const scoreText = document.querySelector('.score');
const highScoreText = document.querySelector('.highscore');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

btnCheck.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    message.textContent = '⛔️ No number!';

    //when player wins!
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      highScoreText.textContent = highScore;
    }
  } else if (guess !== secretNumber)
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📈 Number is to high!' : '📉 Number is to low!'
      );
      score--;
      scoreText.textContent = score;
    } else {
      displayMessage('GAME OVER!');
      scoreText.textContent = 0;
    }
});

btnAgain.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  const guess = document.querySelector('.guess');
  guess.value = '';
  scoreText.textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

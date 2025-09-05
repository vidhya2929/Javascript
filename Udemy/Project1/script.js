' use strict'
// outside of the handler function because it is defined only once, if it is inside the handler function then on each click, we get a new secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// refactoring 2
const displayMessage = function(message){ //passing message as the parameter
  document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener("click", function() {  // 1) name of the event that we are listening for 2) function value(executes whenever the event happens)
 const guess = Number(document.querySelector('.guess').value);
 console.log(guess,typeof guess);

// When there is no input
 if(!guess){        //here zero(when click the check button without an input) is a falsy value
  // RE-Factor
  // document.querySelector('.message').textContent = 'No Number!';
  displayMessage('No Number!');
 }
//  When player wins
 else if(guess === secretNumber){
   displayMessage('Correct Number!');
 document.querySelector('.number').textContent = secretNumber;
 document.querySelector('body').style.backgroundColor = '#60b347';
// whenever we are manipulating a Style, we always need to specify a string
document.querySelector('.number').style.width = '30rem';

if(score > highScore){
    highScore = score;
    document.querySelector('.highScore').textContent = highScore;
}

 }
//  When guess is wrong (re-factored)
 else if(guess !== secretNumber){
   if(score > 1){
  displayMessage(guess > secretNumber ? 'Too High': 'Too Low');
    score = score-1;
    document.querySelector('.score').textContent = score;
 }
 else{
 displayMessage('You lose the game!');
  document.querySelector('.score').textContent = 0;
 }
 }
});
// //  when guess is too high
//  else if(guess > secretNumber){
//   if(score > 1){
//   document.querySelector('.message').textContent = 'Too High';
//     score = score-1;
//     document.querySelector('.score').textContent = score;
//  }
//  else{
//   document.querySelector('.message').textContent = 'You lose the game!';
//   document.querySelector('.score').textContent = 0;
//  }
//   }
//   // when guess is too low
 
//  else if(guess < secretNumber){
//   if(score > 1){
//   document.querySelector('.message').textContent = 'Too Low!';
//   score--
//   document.querySelector('.score').textContent = score;
//  }
// }
// else{
//   document.querySelector('.message').textContent = 'You lose the game!';
//   document.querySelector('.score').textContent = 0;
// }
document.querySelector('.again').addEventListener("click", function() {
  score = 20
   secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  displayMessage('start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem';
})
// 
//  ROCK PAPER SCISSORS
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice){
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  
  let result ="";
  if(playerChoice === computerChoice){
    result = "IT'S A TIE!";
  }
  else{
    switch(playerChoice){
      case "rock":
        (computerChoice === "scissors") ? "YOU WIN!":"YOU LOSE!";
        break;
      case "paper":
        (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        (computerChoice === "paper") ? "YOU WIN!": "YOU LOSE!";
        break;
    }
  }
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText","redText");

  switch(result){
    case "YOU WIN!":
      resultDisplay.classList.add(".greenText");
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("redText");
      break;
  }
}

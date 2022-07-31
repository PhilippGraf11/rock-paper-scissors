const gameInputs = ['rock', 'paper', 'scissors'];
let computerSel;
let computerChoice;
let userSelection;


function game (humanChoice) {
  
  userSelection = gameInputs[humanChoice];

  function computerPlay() {
    computerSel = Math.floor(Math.random() * gameInputs.length);
    computerChoice = (gameInputs[computerSel]);
  }
computerPlay();

  document.querySelector('h1').textContent = `You chose: ${userSelection} , Computer chose: ${computerChoice}`;

  function playRound (computerChoice, userSelection) {
 
    if (userSelection === 'rock' && computerChoice === 'scissors') {
        alert ('You win!');
    } else if (userSelection === 'rock' && computerChoice === 'rock') {
        alert ("It's a tie!");
    } else if (userSelection === 'paper' && computerChoice === 'rock') {
        alert ('You win!');
    } else if (userSelection === 'paper' && computerChoice === 'paper') {
        alert ("It's a tie!");
    } else if (userSelection === 'scissors' && computerChoice === 'paper') {
        alert ('You win!');
    } else if (userSelection === 'scissors' && computerChoice === 'scissors') {
        alert ("It's a tie!");
    } else {
       alert ('You lose!');
    }
  } 
  playRound (computerChoice, userSelection);
} 

// loop until user wins or loses 5 times
function gameLoop () {
  let userScore = 0;
  let computerScore = 0;
  let round = 0;
  while (userScore < 5 && computerScore < 5) {
    round++;
    let humanChoice = prompt('Choose rock, paper, or scissors');
    game(humanChoice);
    if (computerChoice === 'rock' && userSelection === 'scissors') {
      computerScore++;
    } else if (computerChoice === 'rock' && userSelection === 'paper') {
      userScore++;
    } else if (computerChoice === 'paper' && userSelection === 'rock') {
      computerScore++;
    } else if (computerChoice === 'paper' && userSelection === 'paper') {
      userScore++;
    } else if (computerChoice === 'scissors' && userSelection === 'paper') {
      computerScore++;
    } else if (computerChoice === 'scissors' && userSelection === 'scissors') {
      userScore++;
    } else {
      userScore++;
    }
    document.querySelector('h1').textContent = `You chose: ${userSelection} , Computer chose: ${computerChoice}`;
    document.querySelector('h2').textContent = `Round ${round}`;
    document.querySelector('h3').textContent = `You: ${userScore} Computer: ${computerScore}`;
  }
  if (userScore === 5) {
    alert ('You win!');
  } else {
    alert ('You lose!');
  }
}





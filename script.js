// function getComputerChoice that will randomly return either 'rock', 'paper', or 'scissors'
function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}
// write a function that plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    // if playerSelection is equal to computerSelection, return 'tie'
    if (playerSelection === computerSelection) {
        return 'tie';
    }
    // if playerSelection is 'rock' and computerSelection is 'scissors', return 'win'
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'win';
    }
    // if playerSelection is 'paper' and computerSelection is 'rock', return 'win'
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'win';
    }
    // if playerSelection is 'scissors' and computerSelection is 'paper', return 'win'
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'win';
    }
    // if playerSelection is 'rock' and computerSelection is 'paper', return 'lose'
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'lose';
    }
    // if playerSelection is 'paper' and computerSelection is 'scissors', return 'lose'
    if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'lose';
    }
    // if playerSelection is 'scissors' and computerSelection is 'rock', return 'lose'
    if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'lose';
    }
}
 // get player selection from the user via prompt and store it in a variable case insensitive
// var playerSelection = prompt('Rock, paper, or scissors?').toLowerCase();
// create 3 buttons that will be used to play the game
// var rockButton = document.getElementById('rock');
 //var paperButton = document.getElementById('paper');
 // var scissorsButton = document.getElementById('scissors');
    // add an event listener to the rock button that will run the function playRound when clicked
    
document.getElementById('stein').onclick = function (e) {
    playerSelection = 'rock';
}

document.getElementById('schere').onclick = function (e) {
    playerSelection = 'scissors';
}
document.getElementById('papier').onclick = function (e) {
    playerSelection = 'paper';
}
        
        


// get computer selection from the computer via getComputerChoice and store it in a variable
var computerSelection = getComputerChoice();
// call playRound function and store the result in a variable
var result = playRound(playerSelection, computerSelection);
// if result is 'win', alert the user that they won
if (result === 'win') {
    alert('You win!');
}
// if result is 'lose', alert the user that they lost
if (result === 'lose') {
    alert('You lose!');
}
// if result is 'tie', alert the user that they tied
if (result === 'tie') {
    alert('You tied!');
}
// play a 5 round game and console log the result of each round and the total number of wins, losses, and ties for the player and computer 
var playerWins = 0;
var computerWins = 0;
var ties = 0;
for (var i = 0; i < 5; i++) {
    var result = playRound(prompt('Rock, paper, or scissors?').toLowerCase(), getComputerChoice());
    if (result === 'win') {
        playerWins++; alert('You win!');
    } else if (result === 'lose') {
        computerWins++; alert('You lose!');
    } else {
        ties++; alert('You tied!');
        
    }
}
alert('You tied ' + ties + ' times.');
// if playerWins is greater than computerWins, alert the user that they won the game
if (playerWins > computerWins) {
    alert('You won the game!');
}
// if computerWins is greater than playerWins, alert the user that they lost the game
if (computerWins > playerWins) {
    alert('You lost the game!');
}
// if playerWins is equal to computerWins, alert the user that they tied the game
if (playerWins === computerWins) {
    alert('You tied the game!');
}





    

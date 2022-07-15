// function getcomputerchoice
// computer sagt schere stein oder papier random
// spieler sagt schere stein oder papier via prompt
// Computer Input

// <0,34 Rock
// <=0,67 Paper
// ansonsten Scissors




var computerChoice = Math.random();
var userChoice = prompt("Make your choice")

if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
}
else   {
    computerChoice = "scissors";
}



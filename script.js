// function getcomputerchoice
// computer sagt schere stein oder papier random
// spieler sagt schere stein oder papier via prompt
// Computer Input

// <0,34 Rock
// <=0,67 Paper
// ansonsten Scissors




var computerChoice = Math.random();
var userChoice = prompt("Make your choice");

// computerchoice machen
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
}
else   {
    computerChoice = "scissors";
}

// userchoice vs computerchoice

if (computerChoice === userChoice) {
    console.log("Tie!")

}

if (computerChoice === "rock" && userChoice === "paper") {
    console.log("Win!")
} else if (userChoice === "rock" && computerChoice === "paper") {
    console.log("Lose!")
}


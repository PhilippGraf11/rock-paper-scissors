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
    console.log("You win! Paper beats rock!")
} else if (userChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats rock!")
}

if (computerChoice === "scissors" && userChoice === "rock") {
    console.log("You win! Rock beats scissors!")
} else if (userChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats scissors!")
}

if (computerChoice === "paper" && userChoice === "scissors") {
    console.log("You win! Scissors beats paper!")
} else if (userChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats paper!")
}

// 
// function getcomputerchoice
// computer sagt schere stein oder papier random
// spieler sagt schere stein oder papier via prompt
// Computer Input

// <0,34 Rock
// <=0,67 Paper
// ansonsten Scissors




var computerChoice = Math.random();
var userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();



    



// computerchoice machen
function computerPlay() {
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
}
else   { 
    computerChoice = "scissors";
} 

// userchoice vs computerchoice
// 0 = tie, 1 = win, 2 = lose



if (computerChoice === userChoice) {

    return "tie";
}
    
if (computerChoice === "rock" && userChoice === "paper") {
    return "win";
} else if (userChoice === "rock" && computerChoice === "paper") {
    return "lose";
}

if (computerChoice === "scissors" && userChoice === "rock") {
    return "win";
} else if (userChoice === "scissors" && computerChoice === "rock") {
    return "lose";
}

if (computerChoice === "paper" && userChoice === "scissors") {
    return "win";
} else if (userChoice === "paper" && computerChoice === "scissors") {
    return "lose";
}
    }

    


 console.log(computerPlay(userChoice, computerChoice));
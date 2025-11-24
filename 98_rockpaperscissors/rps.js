console.log("hello")

/*
create random rock paper or scissors for comp
prompt user choice, array, number or text, validate input
compare variables to determine winner
spit out win lose or draw

Play 5 rounds
count 

*/

let pcChoiceRPS;
let userChoiceRPS;
let humanWins = 0;
let pcWins = 0;


function getPCChoice () {
    let x = Math.floor(Math.random() * 3);

    if (x === 0) {
        pcChoiceRPS = "rock";
    } else if (x === 1) {
        pcChoiceRPS = "paper";
    } else if (x === 2) {
        pcChoiceRPS = "scissors";
    }

    console.log(`pcChoiceRPS ${pcChoiceRPS}`);

    return pcChoiceRPS;
}

function getUserChoice () {
    let humanInput = prompt("Enter rock, paper or scissors: ");
    
    userChoiceRPS = humanInput.toLocaleLowerCase();

    console.log(`userChoiceRPS ${userChoiceRPS}`);
    
    return userChoiceRPS;
}

function compareChoices() {
    
    if (userChoiceRPS === pcChoiceRPS) {
        console.log("Draw!");
    } else if (userChoiceRPS === "paper" && pcChoiceRPS === "rock" || userChoiceRPS === "scissors" && pcChoiceRPS === "paper" || userChoiceRPS === "rock" && pcChoiceRPS === "scissors") {
        console.log("You won!");
        humanWins++;
    } else if (userChoiceRPS === "rock" && pcChoiceRPS === "paper" || userChoiceRPS === "paper" && pcChoiceRPS === "scissors" || userChoiceRPS === "scissors" && pcChoiceRPS === "rock") {
        console.log("You lost!");
        pcWins++;
    } 
}

function playRound() {
    // code for single round
    
    getUserChoice();
    getPCChoice();
    compareChoices();
    
}

function playGame() {
    // for loop for 5 rounds
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log(`Round ${i + 1}`);
    }

    if (humanWins > pcWins) {
        console.log("You won the game.");
    } else if (humanWins < pcWins) {
        console.log("PC won the game.");
    }
}

playGame();

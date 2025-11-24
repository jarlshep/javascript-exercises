
let pcChoiceRPS;
let userChoiceRPS;
// let humanWins = 0;
// let pcWins = 0;
const choice ="";


function getPCChoice () {
    let x = Math.floor(Math.random() * 3);

    if (x === 0) {
        pcChoiceRPS = "rock";
    } else if (x === 1) {
        pcChoiceRPS = "paper";
    } else if (x === 2) {
        pcChoiceRPS = "scissors";
    }

    // let pcChoice = document.getElementById(pcChose);
    pcChose.innerHTML = `Computer choice: ${pcChoiceRPS}`;

    return pcChoiceRPS;
}

function getUserChoice(choice) {

    userChose.innerHTML = `User choice: ${choice}`;
    
}

function compareChoices(choice, pcChoiceRPS) {

    if (choice === pcChoiceRPS) {
        // console.log("Draw!");
        document.getElementById("wonOrLost").innerHTML = "Draw!";
    } else if (choice === "paper" && pcChoiceRPS === "rock" || choice === "scissors" && pcChoiceRPS === "paper" || choice === "rock" && pcChoiceRPS === "scissors") {
        // console.log("You won!");
        document.getElementById("wonOrLost").innerHTML = "You won the round!";
        // humanWins++;
    } else if (choice === "rock" && pcChoiceRPS === "paper" || choice === "paper" && pcChoiceRPS === "scissors" || choice === "scissors" && pcChoiceRPS === "rock") {
        // console.log("You lost!");
        document.getElementById("wonOrLost").innerHTML = "You lost the round!";
        // pcWins++;
    } 
}

function playRound(choice) {
    // code for single round
    
    getUserChoice(choice);
    getPCChoice();
    compareChoices(choice, pcChoiceRPS);
    
}

/* function playGame() {
    // for loop for 5 rounds
    for (let i = 0; i < 5; i++) {
        playRound();
        // console.log(`Round ${i + 1}`);
    }

    if (humanWins > pcWins) {
        // console.log("You won the game.");
        document.getElementById("wonOrLost").innerHTML = "You won the game.";
    } else if (humanWins < pcWins) {
        // console.log("PC won the game.");
        document.getElementById("wonOrLost").innerHTML = "PC won the game.";
    }
} */

// playGame();

document.getElementById("rock").addEventListener("click", () => {
    document.getElementById("wonOrLost").innerHTML = "";
    playRound("rock");
});

document.getElementById("paper").addEventListener("click", () => {
    document.getElementById("wonOrLost").innerHTML = "";
    playRound("paper");
});

document.getElementById("scissors").addEventListener("click", () => {
    document.getElementById("wonOrLost").innerHTML = "";
    playRound("scissors");
});
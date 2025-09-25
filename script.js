// Program will prompt the user for a choice and writes the computers random choice
//  and adds a point to the winner and give the score for the players and the round number for 5 rounds 
//  then declares the winner in the game

// Declare a variable for the user choice.
// Declare a variable for the random computer choice.
// Print the two choices.
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
console.log("Your choice: " + humanChoice + "\n" + "Computer: " + computerChoice);

// Initialize a variable for the user score with 0.
// Initialize a variable for the computer score with 0.
let humanScore = 0;
let ComputerScore = 0;
// Compare the two choices and declare the winner.
// Add 1 to the winners score.
//playRound(humanChoice, computerChoice);
// Repeat five times then declare the winner in the game


// Prompt the user for a choice and return it to the user var.
function getHumanChoice() {
    return prompt("What is your choice?");
}
// Take a random choice and return it to the computer var,
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 9);
    if (choice < 3) {
        return "rock"
    }else if (choice >= 3 && choice < 6) {
        return "paper";
    }else {
        return "scissors";
    }
}
// If one chooses rock it will win to scissors and loses to paper
// If one chooses paper it will win to rock and loses to paper
// If one chooses scissors it will win to paper and loses to rock 
//  then add 1 to the winners score var.
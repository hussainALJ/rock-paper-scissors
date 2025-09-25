// Program will prompt the user for a choice and writes the computers random choice
//  and adds a point to the winner and give the score for the players and the round number for 5 rounds 
//  then declares the winner in the game

// Declare a variable for the user choice.
// Declare a variable for the random computer choice.
let humanChoice = getHumanChoice("What is your choice?");
let computerChoice = getComputerChoice();

// Initialize a variable for the user score with 0.
// Initialize a variable for the computer score with 0.
let humanScore = 0;
let computerScore = 0;

// Compare the two choices and declare the winner.
// Add 1 to the winners score.
// Print the two choices.
// Print the scores.
// Repeat five times then declare the winner in the game
playRound(humanChoice, computerChoice);
console.log("Your choice: " + humanChoice + "\n" + "Computer: " + computerChoice);
console.log("Score: " + "\n" + "You: " + humanScore + "     " + "Computer: " + computerScore)


// Prompt the user for a choice and return it to the user var.
function getHumanChoice(str) {
    return prompt(str);
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
// A tie if both choices are the same,
//  then add 1 to the winners score var.
function playRound(user, comp) {
    if (user.toLowerCase() == comp) {
        console.log("It's a tie!");
    }else if (user.toLowerCase() == "rock") {
        switch (comp) {
            case "paper" :
                ++computerScore;
                console.log("You lose!");
                break;
            case "scissor" :
                ++humanScore;
                console.log("You win!");
                break;
        }
    }else if (user.toLowerCase() == "paper") {
        switch (comp) {
            case "rock" :
                ++humanScore;
                console.log("You win!");
                break;
            case "scissors" :
                ++computerScore;
                console.log("You lose!");
                break;
        }
    }else if (user.toLowerCase() == "scissors") {
        switch (comp) {
            case "rock" :
                ++computerScore;
                console.log("You lose!");
                break;
            case "paper" :
                ++humanScore;
                console.log("You win!");
        }
    }else {
        humanChoice = getHumanChoice("Choice invalid choose again")
        playRound(humanChoice, computerChoice);
    }
}
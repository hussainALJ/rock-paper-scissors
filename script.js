// Program will prompt the user for a choice and writes the computers random choice
//  and adds a point to the winner and give the score for the players and the round number for 5 rounds 
//  then declares the winner in the game

// Declare a variable for the user choice.
// Declare a variable for the random computer choice.
let humanChoice;
let computerChoice;

// Initialize a variable for the user score with 0.
// Initialize a variable for the computer score with 0.
let humanScore = 0;
let computerScore = 0;

// Compare the two choices and declare the winner.
// Add 1 to the winners score.
// Print the two choices.
// Print the scores.
// Repeat 5 times then declare the winner in the game
playGame(5);

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
        let msg;
    if (user.toLowerCase() == comp) {
        msg = "It's a tie!";
    }else if (user.toLowerCase() == "rock") {
        switch (comp) {
            case "paper" :
                ++computerScore;
                msg = "You lose!";
                break;
            case "scissors" :
                ++humanScore;
                msg = "You win!";
                break;
        }
    }else if (user.toLowerCase() == "paper") {
        switch (comp) {
            case "rock" :
                ++humanScore;
                msg = "You win!";
                break;
            case "scissors" :
                ++computerScore;
                msg = "You lose!";
                break;
        }
    }else if (user.toLowerCase() == "scissors") {
        switch (comp) {
            case "rock" :
                ++computerScore;
                msg = "You lose!";
                break;
            case "paper" :
                ++humanScore;
                msg = "You win!";
        }
    }else {
        alert("Choice invalid");
        humanChoice = getHumanChoice("choose again")
        playRound(humanChoice, computerChoice);
    }
    console.log("Your choice: " + humanChoice + "\n" + "Computer: " + computerChoice);
    console.log(msg)
    alert(msg)
}
// Repeat n times then declare the winner in the game
function playGame(n) {
    --n;
    humanChoice = getHumanChoice("What's your choice?");
    computerChoice = getComputerChoice();
    if (n > 0) {
        playRound(humanChoice, computerChoice);
        console.log("Score: " + "\n" + "You: " + humanScore + "     " + "Computer: " + computerScore);
        playGame(n);
    }else {
        if (humanScore > computerScore) {
            console.log("Congrats you won" + "\n" + "You: " + humanScore + "     " + "Computer: " + computerScore)
            alert("Congrats you won!" + "\n" + "You: " + humanScore + "     " + "Computer: " + computerScore);;
        }else if (humanScore < computerScore) {
            console.log("You lost the game!" + "\n" + "You: " + humanScore + "     " + "Computer: " + computerScore);
            alert("You lost the game!" + "\n" + "You: " + humanScore + "     " + "Computer: " + computerScore);
        }else {
            console.log("It's a tie");
            alert("It's a tie");
        }
    }
}

// this is to make a computer choice
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let choices = ["rock", "paper", "scissors"];

    return choices[random];
    
}

// to know who wins in a single round
function gameRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
       return "You win! rock beats scissors."
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! rock loses to paper."
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! paper beats rock."
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! paper loses to scissors"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! scissors loses to paper"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win scissors beats paper"
    } else if (playerSelection === computerSelection) {
        return "It's a draw!"
    }
}

// run the game for 5 rounds using for loop
function game() {
	alert("Welcome to rock, paper, scissors game!");
	alert("Let's begin!");
	
    let playerScore = 0;
    let computerScore = 0;
    let draw = 0;

    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerChoice = prompt("Enter your choice (rock, paper, scissors): ")
        let playerSelection = playerChoice.toLowerCase();

        confirm(gameRound(playerSelection, computerSelection))
        
        console.log(playerSelection, computerSelection, gameRound(playerSelection, computerSelection))
				
				// to add a score to whoever wins per round
        if (gameRound(playerSelection, computerSelection).includes("win")) {
            playerScore += 1;
        } else if (gameRound(playerSelection, computerSelection).includes("lose")) {
            computerScore += 1;
        } else if (gameRound(playerSelection, computerSelection).includes("draw")) {
            draw += 1;
        }
    }

    confirm(`Your final score is: wins-${playerScore}, draw-${draw}, loses-${computerScore}`);
}

game();
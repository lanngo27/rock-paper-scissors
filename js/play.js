let playerScore = 0;
let computerScore = 0;

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

// Randomly generate computer's play
function computerPlay() {
    switch (Math.floor(Math.random() * 3))
    {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            alert("Something went wrong!");
    }
}

// Play one round of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie";
    } else if (
        (playerSelection == "Rock" && computerSelection == "Scissors")
        || (playerSelection == "Paper" && computerSelection == "Rock")
        || (playerSelection == "Scissors" && computerSelection == "Paper")
    ){
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

// Play five round of the game
function game() {
    for (let i=0; i<5; i++)
    {
        let computerSelection = computerPlay();
        let playerSelection = capitalizeFirstLetter(
            prompt("Rock, Paper or Scissors?").trim());
        
        console.log(`Player: ${playerSelection} ` +
            `vs Computer: ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }

    console.log("######## Final Results ########");
    console.log(`Player score: ${playerScore} ` +
        `vs Computer score: ${computerScore}`);
    if (playerScore < computerScore) {
        console.log("You lost!");
    } else if (playerScore > computerScore) {
        console.log("You won!");
    } else {
        console.log("It's a tie");
    }   
}

game();
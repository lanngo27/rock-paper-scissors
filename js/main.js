const selections = document.querySelectorAll(".human .selection");

let playerScore = 0;
const playerScoreSelector = document.querySelector(".human-score");

let computerScore = 0;
const compScoreSelector = document.querySelector(".computer-score");

const outputSelector = document.querySelector(".output");
const endContainerSelector = document.querySelector(".endgame-container");
const endMsgSelector = document.querySelector(".end-message");
const restartBtnSelector = document.querySelector(".btn-restart");

restartBtnSelector.addEventListener("click", () => {
    location.href = "index.html";
});
//overlaySelector.addEventListener("click", )

selections.forEach((selection) => {
    selection.addEventListener("click", () =>{
        let element = event.target;
        let playerSelection = "";
        if (element.classList.contains("rock")) {
            playerSelection = "rock";
        } else if (element.classList.contains("paper")) {
            playerSelection = "paper";
        } else if (element.classList.contains("scissors")) {
            playerSelection = "scissors";
        }
        playGame(playerSelection);
    })
})

// Randomly generate computer's play
function computerPlay() {
    switch (Math.floor(Math.random() * 3))
    {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Play until one player has 5 points
function playGame(playerSelection) {
    playRound(playerSelection)

    playerScoreSelector.textContent = `PLAYER SCORE: ${playerScore}`;
    compScoreSelector.textContent = `COMPUTER SCORE: ${computerScore}`;

    if (playerScore == 5) {
        endGamePopup("You won!");
    } else if (computerScore == 5) {
        endGamePopup("You lost!");
    } 
}

function endGamePopup(message) {
    endMsgSelector.textContent = message;
    endContainerSelector.style.display = "block";
}

// Play one round of the game
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    console.log(`Player chose ${playerSelection}, computer chose ${computerSelection}`);
    if (playerSelection == computerSelection) {
        outputSelector.textContent = "It's a tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors")
        || (playerSelection == "paper" && computerSelection == "rock")
        || (playerSelection == "scissors" && computerSelection == "paper")
    ){
        playerScore++;
        outputSelector.textContent = `You win: ${playerSelection} beats ${computerSelection}!`
    } else {
        computerScore++;
        outputSelector.textContent = `You lose: ${computerSelection} beats ${playerSelection}!`
    }
}
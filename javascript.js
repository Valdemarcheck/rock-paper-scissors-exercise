
// possible computer actions
let actions = ['rock', 'paper', 'scissors'];

// get a random computer action
function getComputerAction() {
    return actions[Math.floor(Math.random()*3)];
}

// returns player action
function getPlayerAction() {
    // executes infinitely until player prompts an appropriate game action
    while (true) {
        let playerAction = prompt('What is your action?').toLowerCase();
        if (playerAction === 'scissors' || playerAction === 'paper' || playerAction === 'rock') {
            return playerAction;
        } else {
            console.log('Your output was incorrect. Please, input either "Rock", "Paper" or "Scissors"');
        }
    }
    
}

// plays one round of the game and executes a result
function round(playerSelection, computerSelection) {

    // exclude case sensitivity
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return 'It\'s a draw!';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You lost! Paper beats rock';
        } else {
            return 'You won! Rock beats scissors';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'You lost! Scissors beat paper';
        } else {
            return 'You won! Paper beats rock';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You lost! Rock beats scissors';
        } else {
            return 'You won! Scissors beat paper';
        }
    } 
}

function game() { // a game of 5 rounds
    // scores setup
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 1; i <= 5; i++) { // play a round for 5 times
        let result = round(getPlayerAction(), getComputerAction());
        if (!result.startsWith('It\'s a draw')) { // doesn't give score to anyone if it's a draw
            (result.startsWith('You won')) ? playerScore++ : computerScore++; // give +1 score to winner of the round
        }
        console.log(`${result}. Your score is ${playerScore}, PC\'s score is ${computerScore}`);
    }
    if (!(computerScore === playerScore)) { // if game isn't draw, announce a winner
        (computerScore>playerScore) ? console.log('Computer won!') : console.log('Player won!')
    } else {
        console.log('It\'s a draw! Nobody has won');
    }

    // Ask if player wants to play another round
    let answer = prompt('Do you wanna play again? (print Y/y to start and N/n to refuse)');
    (answer.toLowerCase() == 'y') ? game() : alert('Maybe next time :)');
}

game();

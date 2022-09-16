// create a function that randomly returns rock, paper or scissors
//  create a private array that contains 'rock', 'paper' and 'scissors'
//  elements
//  let function produce a random number between 0 and 2, floor it, and
//  return a label with index of that random number
// create a function that plays one round of rock, paper, scissors
//  prompt user for an action and save it in a variable
//  execute getComputerAction() and put it in a variable
// compare two variables
// make a giant switch case for each possible case

let actions = ['rock', 'paper', 'scissors'];

function getComputerAction() {
    return actions[Math.floor(Math.random()*3)];
}

function getPlayerAction() {
    while (true) {
        let playerAction = prompt('What is your action?').toLowerCase();
        if (playerAction === 'scissors' || playerAction === 'paper' || playerAction === 'rock') {
            return playerAction;
        } else {
            console.log('Your output was incorrect. Please, input either "Rock", "Paper" or "Scissors"');
        }
    }
    
}

function round(playerSelection, computerSelection) {
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



function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 1; i <= 5; i++) {
        let result = round(getPlayerAction(), getComputerAction());
        if (!result.startsWith('It\'s a draw')) {
            (result.startsWith('You won')) ? playerScore++ : computerScore++;
        }
        console.log(`${result}. Your score is ${playerScore}, PC\'s score is ${computerScore}`);
        setTimeout(2000);
    }
    if (!(computerScore===playerScore)) {
        (computerScore>playerScore) ? console.log('Computer won!') : console.log('Player won!')
    } else {
        console.log('It\'s a draw! Nobody has won');
    }

    // Ask if player wants to play another round
    let answer = prompt('Do you wanna play again? (print Y/y to start and N/n to refuse)');
    (answer.toLowerCase() == 'y') ? game() : alert('Maybe next time :)');
}

game();

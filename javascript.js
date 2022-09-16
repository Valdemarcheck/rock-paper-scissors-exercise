// create a function that randomly returns rock, paper or scissors
//  create a private array that contains 'rock', 'paper' and 'scissors'
//  elements
//  let function produce a random number between 0 and 2, floor it, and
//  return a label with index of that random number
// create a function that plays one round of rock, paper, scissors
//  prompt user for an action and save it in a variable
//  execute getAction() and put it in a variable
// compare two variables
// make a giant switch case for each possible case

function getAction() {
    let actions = ['rock', 'paper', 'scissors'];
    return actions[Math.floor(Math.random()*3)];
}

function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('It\' a draw!');
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            console.log('You lost! Paper beats rock');
        } else {
            console.log('You won! Rock beats scissors');
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            console.log('You lost! Scissors beat paper');
        } else {
            console.log('You won! Paper beats rock');
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            console.log('You lost! Rock beats scissors');
        } else {
            console.log('You won! Scissors beat paper');
        }
    }
}

round(prompt('What is your action?').toLowerCase(), getAction());


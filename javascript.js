
// possible computer actions
let actions = [{name: 'rock',
                beats: 'scissors',
                beatenBy: 'paper'}, 
                {name: 'paper',
                beats: 'rock',
                beatenBy: 'scissors'}, 
                {name: 'scissors',
                beats: 'paper',
                beatenBy: 'rock'}];

// public scores
let pcScore = 0;
let playerScore = 0;

const resultDiv = document.createElement('div');
resultDiv.classList.add('resultDiv');

const scores = document.createElement('div');
scores.classList.add('scoresDiv');

let buttons = createButtons();

document.body.appendChild(scores);
document.body.appendChild(resultDiv);

// create rock, paper and scissors buttons
function createButtons() {

    const rockButton = document.createElement('button')
    rockButton.classList.add('rock');
    rockButton.textContent = 'rock';
    rockButton.addEventListener('click', function(){round('rock', get_PC_Action())});

    const paperButton = document.createElement('button')
    paperButton.classList.add('paper');
    paperButton.textContent = 'paper';
    paperButton.addEventListener('click', function(){round('paper', get_PC_Action())});

    const scissorsButton = document.createElement('button')
    scissorsButton.classList.add('scissors');
    scissorsButton.textContent = 'scissors';
    scissorsButton.addEventListener('click', function(){round('scissors', get_PC_Action())});

    // append all buttons and text elements
    document.body.appendChild(rockButton);
    document.body.appendChild(paperButton);
    document.body.appendChild(scissorsButton);
    
    return [rockButton, paperButton, scissorsButton];
}

// get a random computer action
function get_PC_Action() {
    return actions[Math.floor(Math.random()*3)]['name'];
}

function restart() {
    pcScore = 0;
    playerScore = 0;

    const restartBtn = document.body.querySelector('.restartButton');
    resultDiv.textContent = '';
    scores.textContent = `Your score: 0, PC\'s score: 0`;
    document.body.removeChild(restartBtn)

    rockButton.addEventListener('click', function(){round(actions[0]['name'], get_PC_Action())});
    paperButton.addEventListener('click', function(){round(actions[1]['name'], get_PC_Action())});
    scissorsButton.addEventListener('click', function(){round(actions[2]['name'], get_PC_Action())});
}

// create Restart button and remove eventListeners from action buttons
function theEnd(buttons) {
    // make a restart button
    (pcScore === 5) ? resultDiv.textContent = `PC won!`: resultDiv.textContent = `You won!`;
    const restartBtn = document.createElement('button')
    restartBtn.classList.add('restartButton');
    restartBtn.textContent = 'Restart';
    restartBtn.addEventListener('click', function(){restart()});
    document.body.appendChild(restartBtn);

    // don't let player press action buttons until restart
    buttons.forEach(btn => btn.removeEventListener('click', round));
}

// plays one round of the game and executes a result
function round(playerSelect, pcSelect) {

    // check for a round's winner and announce him, modify his score
    if (playerSelect === pcSelect) {
        resultDiv.textContent = 'It\'s a draw!';
    } else { // check wether a player or computer won by going through 'actions' array
        for(let action of actions) {
            if (action['name'] === playerSelect) { 
                if (action['beats'] === pcSelect) {
                    resultDiv.textContent = `You Won! Your ${playerSelect} beats PC's ${pcSelect}`;
                    playerScore++;
                    break; 
                } else if (action['beatenBy'] === pcSelect) {
                    resultDiv.textContent = `You lost! PC's ${pcSelect} beats your ${playerSelect}`;
                    pcScore++;
                    break;
                }
            }
        };
    }
    
    // announce scores and check if there is a winner
    scores.textContent = `Your score: ${playerScore}, PC\'s score: ${pcScore}`;
    if (playerScore === 5 || pcScore === 5) theEnd(buttons);
}

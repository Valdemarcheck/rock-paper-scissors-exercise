// create a function that randomly returns rock, paper or scissors
//  create a private array that contains 'rock', 'paper' and 'scissors'
//  elements
//  let function produce a random number between 0 and 2, floor it, and
//  return a label with index of that random number
// 
// 
// 
// 

function getAction() {
    let actions = ['rock', 'paper', 'scissors'];
    return actions[Math.floor(Math.random()*3)];
}


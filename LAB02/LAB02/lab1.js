const prompt = require('prompt');
prompt.start();
prompt.get(['userSelection'], function (err, result) {
if (err) { return onErr(err); }
const userSelection = result.userSelection.toUpperCase();
const computerSelection = generateComputerSelection(); console.log("User Selection:", userSelection);
console.log("Computer Selection:", computerSelection);
let outcome;
if (userSelection === computerSelection) {
outcome = "It's a tie";
} else if ((userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
(userSelection === 'PAPER' && computerSelection === 'ROCK') ||
(userSelection === 'SCISSORS' && computerSelection === 'PAPER')) { outcome = "User Wins";
} else {
outcome = "Computer Wins";
} console.log(outcome);
});
function generateComputerSelection() { const randomNumber = Math.random(); if (randomNumber <= 0.34) {
return 'PAPER';
} else if (randomNumber <= 0.34) { return 'SCISSORS';
} else {
return 'ROCK';
} }
function onErr(err)
 { console.error(err); 
    return 1;
}

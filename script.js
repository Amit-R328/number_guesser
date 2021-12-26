let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
const targetNum = generateTarget();


function generateTarget(){
  return (Math.floor(Math.random() * 10));
}

function getAbsoluteDistance(numOne, numTwo){
    return Math.abs(numOne - numTwo);
}

function compareGuesses(humanGuess, pcGuess, targetNum){
  
  if(humanGuess < 0 || humanGuess > 9){
    alert('Error! Please enter a number between 0-9')
  }
  const pcDifference = getAbsoluteDistance(pcGuess, targetNum);
  const humanDifference = getAbsoluteDistance(humanGuess, targetNum);
  return (humanDifference <= pcDifference);
}

function updateScore(winner){
  if(winner === 'human'){
    humanScore++;
  }else{
    computerScore++;
  }
}

function advanceRound(){
  currentRoundNumber++;
}






let index = Math.floor(Math.random() * 3);
let choices = ['rock', 'paper', 'scissors'];

process.stdout.write('Rock, paper, scissors game. Choose one: ')
process.stdin.on('data', function(input){
  let choice = input.toString().trim().toLowerCase();
  let computerChoice = choices[index]
  if (choice !== 'rock' && choice !=='paper' && choice !== 'scissors'){
    process.stdout.write('Please choose rock, paper or scissors. \n')
  } else if (choice === computerChoice) {
      process.stdout.write(`It is a draw. You chose ${choice} and computer chose ${computerChoice}`)
      process.exit();
  } else if ((computerChoice === 'rock' && choice === 'scissors') || (computerChoice === 'scissors' && choice === 'paper') || (computerChoice === 'paper' && choice === 'rock')) {
    process.stdout.write(`Computer won. You chose ${choice} and computer chose ${computerChoice}`)
    process.exit();
  } else {
    process.stdout.write(`You won. You chose ${choice} and computer chose ${computerChoice}`)
    process.exit();
  };
    

  
})
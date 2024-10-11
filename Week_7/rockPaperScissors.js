let index = Math.floor(Math.random() * 3);
let choices = ['rock', 'paper', 'scissors'];

process.stdout.write('Rock, paper, scissors game. Choose one: ')
process.stdin.on('data', function(input){
  let choice = input.toString().trim().toLowerCase();
  let computerChoice = choices[index]

  if (choice !== 'rock' && choice !=='paper' && choice !== 'scissors'){
    process.stdout.write('Please choose rock, paper or scissors.')
  } else if (choice === computerChoice) {
      process.stdout.write(`It is a draw. You chose ${choice} and computer chose ${computerChoice}`)
  }

  process.exit();
})
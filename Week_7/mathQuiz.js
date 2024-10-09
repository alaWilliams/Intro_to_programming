function createCalculation(number1, number2) {
  return number1 + number2; 
};


let score = 0;
let counter = 0;
let wrongAnswer = 0;

process.stdout.write('MATH QUIZ'.padStart(25, '*').padEnd(40, '*') + '\n\n');

function createQuestion() {

  let number1 = Math.floor(Math.random() * 10);
  let number2 = Math.floor(Math.random() * 10);

  process.stdout.write(`${number1} + ${number2} = `)

  
  process.stdin.once('data', function(inputFromUser){
    let number = Number(inputFromUser);   

      if (createCalculation(number1, number2) === number) {
        score += 1
        process.stdout.write(`\nCORRECT!\nYour score is: ${score} \n\n`);
      
      } else {
        wrongAnswer += 1;
        process.stdout.write('INCORRECT\n\n')
    }

      counter += 1;

   
    if (wrongAnswer === 5) {
      process.stdout.write(`You answered incorrectly 5 times. The game is over. You score is: ${score} \n\n`);
      process.exit();
    }
  
    if (counter === 10) {
      process.stdout.write(`Game is OVER. Your score is: ${score} \n`);
      process.exit();

    } else {
      createQuestion()
    }
  
  });}
  
  createQuestion()
 




function createCalculation(number1, number2) {
  return number1 + number2; 
};

let number1 = Math.floor(Math.random() * 10);
let number2 = Math.floor(Math.random() * 10)

process.stdout.write('MATH QUIZ'.padStart(25, '*').padEnd(40, '*') + '\n\n');


let counter = 0;
while (counter < 10) {

  process.stdout.write(number1 + ' + ' + number2 + ' = ')
  process.stdin.on('data', function(inputFromUser){
    let number = Number(inputFromUser);   
    // process.stdout.write(number.toString()) 
    
      if (createCalculation(number1, number2) === number) {
        counter =+ 1
        process.stdout.write(`\nCORRECT!\nYour score is: ${counter}`);
        
      } else (
        process.stdout.write('INCORRECT\n')
      )
  
    process.exit();
    }
    )} 

 




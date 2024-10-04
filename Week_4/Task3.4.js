// Task 4: Multiplication Table
// Ask the user to enter a number and then print out corresponding multiplication
// table using a while loop.

const UTIL = require('util');

process.stdout.write('Please enter a number: ');
process.stdin.on('data', function(number) {
  let multiplier = 1;
  if (isNaN(number)) {
    process.stdout.write('You did not enter a number. Try again. \n');
  } else {
    process.stdout.write(UTIL.format('Multiplication table for %s\n', number));
    while (multiplier <= 10) {
      let formattedNumber = number.toString().trim();
      let result = multiplier * number;
      process.stdout.write(multiplier + ' * ' + formattedNumber + ' = ' + result + '\n');
      multiplier++;
    }
    
    
  }
  
  process.exit();
})
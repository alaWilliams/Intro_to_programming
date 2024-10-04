// 4.1 Task 1: Multiplication Tables 2
// Print out multiplication tables for numbers 1-10 using a loop. Use nested for
// loops.

const UTIL = require('util');

for (let i = 1; i <= 10; i++) {
  process.stdout.write('\nMultiplication table for ' + i + '\n\n' )
  process.stdout.write('*'.repeat(30) + '\n');
  for (let j = 1; j <= 10; j++) {
    let calculation = i + ' * ' + j + ' = ' + (i*j); 
    process.stdout.write('*'.padEnd(10) + calculation.padEnd(20) + '*\n\n');
    
  }
  process.stdout.write('*'.repeat(30) + '\n');
}
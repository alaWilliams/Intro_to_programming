// Task 3 Sum of Numbers
// Create a program that has a method sum(firstNumber,
// secondNumber) that returns the sum of the numbers passed to
// the method as input parameters. Call this method, save the return value in a variable and print it out. Do
// this three times with different variable values. 

function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

let result = sum(1, 2);
process.stdout.write('First sum is ' + result);

result = sum(3, 4);
process.stdout.write('\nSecond sum is ' + result);

result = sum(5, 6);
process.stdout.write('\nThird sum is ' + result);

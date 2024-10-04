// Create a simple program with the following functionality:
// 1. Ask for user to input a number.
// 2. Define a secret number.
// 3. Perform and print out basic calculations for that number with the secret
// number.

process.stdout.write("Guess my secret number. Please, type in a number: ")
process.stdin.on( "data", function( inputFromUser ){
  let secretNumber = 5;
  let userNumber = Number(inputFromUser);
  let add = secretNumber + userNumber;
  let subtract = userNumber - secretNumber;
  let divide = userNumber / secretNumber;
  let multiply = secretNumber * userNumber;
  let modulo = secretNumber % userNumber;
  process.stdout.write("addition " + add + " \nsubtraction " + subtract + " \ndivision " + divide + " \nmultiplication "+ multiply + " \nmodulo " + modulo + " \nWhat is my secret number?");
  process.exit() 
}) ;
// Create a simple program in which the user is asked to give two numbers and then your program prints out which one of them is largest.


process.stdout.write("This program can find the larger of two numbers you enter. Please, enter two numbers separated by single space character:");
process.stdin.on('data', function (userInput) {
 let numbersInString = userInput.toString().split(" ");
 let firstNumber = numbersInString[0];
 let secondNumber = numbersInString[1]
 if (Number(firstNumber) > Number(secondNumber)){
  process.stdout.write( firstNumber + " is bigger")
 } else if (Number(firstNumber) < Number(secondNumber)) {
  process.stdout.write( secondNumber + " is bigger")
 } else if (Number(firstNumber) === Number(secondNumber)) {
  process.stdout.write( firstNumber + " and " + secondNumber + "are equal")
 } else {
  process.stdout.write("Please enter a valid input")
 }
 ;
 process.exit();
})

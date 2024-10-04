// Create a simple program in which the user is asked to give two numbers and then
// your program prints out which one of them is largest.
// Extend the program from previous task to ask for three numbers.

process.stdout.write("This program can find the larger of three numbers you enter. Please, enter three numbers separated by single space character:");
process.stdin.on('data', function (userInput) {
 let numbersInString = userInput.toString().split(" ");
 let firstNumber = Number(numbersInString[0]);
 let secondNumber = Number(numbersInString[1]);
 let thirdNumber = Number(numbersInString[2]);
 let biggestNumber;
 if (firstNumber > secondNumber){
  biggestNumber = firstNumber;
    }
  else {
    biggestNumber = secondNumber;
   }
  if (biggestNumber < thirdNumber) {
    biggestNumber = thirdNumber;
  }
 process.stdout.write("Largest number is: " + biggestNumber)
 process.exit();
});
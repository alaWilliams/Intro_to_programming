// Write a simple program that asks user for three numbers and create
// the following logic:
// ▪ If all three numbers are equal print out “You entered three matching numbers”.
// ▪ If all three numbers are different print out “You entered three different numbers”.
// ▪ If first two are the same, but the third one is different, print out “Third one doesn’t fit”.
// ▪ If any of the numbers is 2, enter “You entered the magic number 2!”.

process.stdout.write("Please, enter three numbers separated by a single space character");
process.stdin.on('data', function (input) {
  let numbersInString = input.toString().split(" ")
  let firstNumber = Number(numbersInString[0]);
  let secondNumber = Number(numbersInString[1]);
  let thirdNumber = Number(numbersInString[2]);
  if (firstNumber === secondNumber && secondNumber === thirdNumber) {
    process.stdout.write("You entered three matching numbers. ");
  } else if (firstNumber !== secondNumber && secondNumber !== thirdNumber && firstNumber !== thirdNumber){
    process.stdout.write("You entered three different numbers. ");
  } else if (firstNumber === secondNumber  && thirdNumber !== firstNumber) {
   process.stdout.write("Third one does not fit.")
  }
  if ( firstNumber === 2 || secondNumber === 2 || thirdNumber === 2){
    process.stdout.write("You entered the magic number 2! ");
  }
  process.exit();
})
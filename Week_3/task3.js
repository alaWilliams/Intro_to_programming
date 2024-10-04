// Write a simple program to figure out whether a given number is even or odd.
process.stdout.write("This program can figure out if a given number is even or odd. Please enter a number");
process.stdin.on('data', function (userInput)  {
  let number = Number(userInput);
  if (number % 2 === 0) {
    process.stdout.write("Your number is even.")
  } else if (number % 2 ==! 0){
    process.stdout.write("Your number is odd.")
  } else {
    process.stdout.write("Please enter a positive number.")
  }
 process.exit();
})
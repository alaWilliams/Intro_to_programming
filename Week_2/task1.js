// Create a simple game in which the user has to guess the secret number. Game has the following
// functionality:
// 1. Program asks the user to enter a number.
// 2. Set secret number to be entered number plus one.
// 3. Print out whether the user won or not.

process.stdout.write("This program is a computer. Please, type in a number: ")
process.stdin.on( "data", function( inputFromUser ){
  let computerNumber = Number(inputFromUser) + 1;
  process.stdout.write("You typed in: " + inputFromUser);
  process.stdout.write("My number is: " + computerNumber);
  process.stdout.write("\nSorry you lost. I won. The game is over.");
  process.exit() 
}) ;


// Write a simple program that asks user a simple yes or no question and prints out a corresponding message. Remember to also handle invalid input.
process.stdout.write("Are you younger than 18? \nPlease answer Y or N.");
process.stdin.on('data', function(userInput) {
 let answer = userInput.toString()[0].toUpperCase();
 if ( answer === 'Y') {
  process.stdout.write('You are an adult\n')
 } else if ( answer === 'N') {
  process.stdout.write('You cannot buy a beer.\n')
 } else{
  process.stdout.write("Please give a valid input")
 }
 process.exit();
})
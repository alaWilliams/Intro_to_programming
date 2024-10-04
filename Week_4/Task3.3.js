// Task 3: Looping through Strings
// Create a program with the following functionality:
// 1. Ask the user to enter a string.
// 2. Loop through the string and print out the string letter by letter saying “1.
// character is [first letter of given string.]” and so on
// use while loop

process.stdout.write("Please enter a string: ");
process.stdin.on('data', function(userInput) {
  let string = userInput.toString().trim();
  let index = 0
  while (index < string.length){
    process.stdout.write('\n' + (index + 1) + '. character is ' + string.charAt(index) + '\n');
    index++;
  }
  
  process.exit();
})


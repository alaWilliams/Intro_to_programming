// Task 4: toMixedCase()
// Create a program that asks the user for a string and then
// prints it out so that all odd characters are in uppercase
// and all even characters are in lower case. Use a for loop.

process.stdout.write('Please enter a string: ');
process.stdin.on('data', function (input) {
  let string = input.toString().trim();
  let mixedCase = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 !== 0 ) {
      mixedCase += string[i].toLowerCase();
    } else {
      mixedCase += string[i].toUpperCase();
    }
  }
  process.stdout.write('The string in mixed case is: ' + mixedCase);
  process.exit();
}
)
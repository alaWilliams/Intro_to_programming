// Palindrome
// Ask the user to give a string and then check if it’s a palindrome
// (a word, phrase, or sequence that reads the same backwards
// as forwards, e.g. madam or nurses run) or not. Use while loops to
// solve this

process.stdout.write('Please enter a string to check if it is a palindrome: ');
process.stdin.on('data', function (input) {
  let string = input.toString().trim().toLowerCase().replace(/\s+/g, '');
  let stringIndex = string.length - 1;
  let startingIndex = 0;
  let palindrome = true;

  while (startingIndex <= stringIndex) {
    if (string[startingIndex] !== string[stringIndex]){
      palindrome = false;
      break;
    }
    startingIndex++;
    stringIndex--;
  }
  if (palindrome) {
    process.stdout.write(string + ' is a palindrome.')
  } else if (palindrome === false) {
    process.stdout.write(string + ' is not a palindrome.')
  }
  process.exit();
}
)
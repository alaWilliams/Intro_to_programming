// Create a program that has the following functionality:
// 1. Ask the user for a string and store it in a variable.
// 2. replaceSmileys(text): Finds smileys in text and replaces them with corresponding text as
// shown in the table below.
// 3. replaceSmileysWithReplacer(text, replacer): Finds smileys in text and replaces them
// with replacer.


function replaceSmileys(string) {
  string = string.replaceAll(':)', '*smiling*');
  string = string.replaceAll(':(', '*sad*');
  string = string.replaceAll(';)', '*winkwink*');
  string = string.replaceAll('<3', '*love*');
  return string;
}

function replaceSmileysWithReplacer(string, replacer) {
  string = string.replaceAll(':)', replacer);
  string = string.replaceAll(':(', replacer);
  string = string.replaceAll(';)', replacer);
  string = string.replaceAll('<3', replacer);
  return string;
}
process.stdout.write('Please enter a string: ')
process.stdin.on('data', function(string) {
  let input = string.toString().trim();
  let newString = replaceSmileys(input);

  process.stdout.write('Replaced text: ' + newString + '\n')

  newString = replaceSmileysWithReplacer(input, '*');
  process.stdout.write('Replaced text (*):  ' + newString)

  process.exit();
});
process.stdout.write("Please enter a number")
process.stdin.on('data', function (userInput) {
let number = Number(userInput);
if (number === 0) {
  process.stdout.write("You entered zero")
} else {
  process.stdout.write("You entered " + number + " which is not a zero")
}
process.exit();
});
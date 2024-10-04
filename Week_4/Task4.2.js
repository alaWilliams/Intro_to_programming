// Triangle
// Create a program that prints a triangle. Program asks the
// user for the height of the triangle and then prints out a
// triangle.

process.stdout.write('Please enter the size of a triangle: ');
process.stdin.on('data', function (input) {
  let height = Number(input);
  if (isNaN(height) || height <= 0) {
    process.stdout.write('You did not enter a valid input.\n')
  } else { 
    let triangle = '*';
    let star = '*'
    for (let i = 0; i < height; i++) {
      process.stdout.write(triangle +'\n');
      triangle+= star;
    }
  }
  process.exit();
})

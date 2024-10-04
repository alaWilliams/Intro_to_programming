// Create a program with a simple menu and following
// functionality:
// 1. Print hello
// 2. Print current date
// 3. End program

process.stdout.write("Please select what you want to do.\n" + "1 - Print hello.\n" + "2 - Print out current date and time.\n" + "3 - End program.\n");
process.stdin.on('data', function(input) {
  let userNumber = Number(input);
  // if (userNumber === 1) {
  //   process.stdout.write("Hello");
  // } else if (userNumber === 2) {
  //   let now = new Date();
  //   let formattedDate = now.toLocaleString();
  //   process.stdout.write(formattedDate);
  // } else if (userNumber === 3) {
  //   process.exit()
  // } else {
  //   process.stdout.write("Please, enter a valid input")
  // }
  // ;

  switch (userNumber) {
    case 1:
      process.stdout.write("Hello")
      break;
    case 2:
      let now = new Date();
      let formattedDate = now.toLocaleString();
      process.stdout.write(formattedDate);
      break;
    case 3:
      process.exit();
    default:
      process.stdout.write("Please, enter a valid input")

  }
})
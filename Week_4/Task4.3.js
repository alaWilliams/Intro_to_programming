// Task 3: Other way around
// Create a program that asks the user for a string and then
// prints it out from the last letter to the first. Use a for loop

process.stdout.write('Please enter a string: ')
process.stdin.on('data', function (input){
  let string = input.toString().trim(); 
  for (let i = string.length-1; i >= 0 ; i--) {
    process.stdout.write(string[i])
  };

 process.exit();
});
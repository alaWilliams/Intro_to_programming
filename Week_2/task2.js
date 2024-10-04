// Task 2: Distance Converter version 0.1
// Create a simple program that converts distance given in miles to
// kilometers. Print out the output with basic write() and also with
// util.format(). 
const util = require("util");
process.stdout.write("This program converts miles to kilometers.\nPlease give distance in miles. ");
process.stdin.on( "data", function(inputFromUser){
  let userInput = Number(inputFromUser);
  let inMiles = userInput * 1.60934;

  process.stdout.write(util.format("You typed: " + userInput + "\n" + userInput + " miles is " + inMiles + " kilometers."));
  process.exit() 
  }
);
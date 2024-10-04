process.stdout.write("This program can convert your height. Please, type in your height in centimeters: ")

process.stdin.on('data', function( userInput) {
  process.stdout.write("This program can convert your heigh. Please, type in your hight in centimeters: \n")
  let height = userInput;
  let heightInInches = height * 0.3937007874 
  let roundedInches = Math.floor(heightInInches);
  let heightInFeet = Math.floor(roundedInches/12);
  let inchesLeft = roundedInches%12;
  process.stdout.write("\nYou are " + heightInInches + " inches tall! \n" + "This is " + heightInFeet + " and " + inchesLeft + " inches.\n\n");
  if (height < 60) {
    process.stdout.write("Only " + height + "centimeters!\nAre you really so short?")
  } if (height > 160 && height < 190) {
    process.stdout.write("That is a quite average height.")
   }; if (height > 400) {
    process.stdout.write("You might be a giraffe!\n")
   }
  process.exit();
})
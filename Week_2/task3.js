// Task 3: Distance Converter version 0.2
// Extend the functionality from the previous task to:
// 1. Ask for the distance in meters.
// 2. Also convert the distance to following units:
// o kilometers
// o miles
// o yards
// o feet
// o inches
// o light years
// 3. Show numbers with three decimals

process.stdout.write("This program converts meter to other units of distance. Please enter distance in meters.");
process.stdin.on( "data", function(inputFromUser){
  let userDistance = Number(inputFromUser);
  let distanceInKm = Math.round(userDistance * 0.001 * 1000) / 1000;
  let distanceInMiles = Math.round(userDistance * 0.0006213712 * 1000) / 1000;
  let distanceInYards = Math.round(userDistance * 1.09361 * 1000) / 1000;
  let distanceInFeet = Math.round(userDistance * 3.28084 * 1000) / 1000;
  let distanceInInches = Math.round(userDistance * 39.3701 * 1000) / 1000;
  let distanceInLightYears = Math.round(userDistance * 1.0570008340247E-16 * 1000) / 1000;
  process.stdout.write(userDistance + " meters is:\n  " + distanceInKm + " kilometers \n" + distanceInMiles + " miles\n" + distanceInYards + " yards\n" + distanceInFeet + " feet\n" + distanceInInches + " inches\n" + distanceInLightYears + " light years.");
  
  process.exit() 
  }
);

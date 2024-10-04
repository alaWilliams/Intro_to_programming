// Task 5: Smallest and Largest with Random Numbers
// 1. Create a program with an 100 item array that is initialized with random numbers of range 0-1000.
// • To create random numbers you can use Math.random () function.
// 2. Find the largest value in the array using a loop and print it out.
// 3. Find the smallest value in the array using a loop and print it out. 

let numbers = new Array(100);

let largestValue = 0;
let smallestValue = 1000;

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = Number((Math.random() * 1000).toFixed(0));
  if (largestValue < numbers[i]) {
    largestValue = numbers[i];
  } if (smallestValue > numbers[i]) {
    smallestValue = numbers[i];
  }
  }
 
process.stdout.write('Random number array is: ' + numbers +'.\nLargest number is: ' + largestValue + '.\nSmallest number is: ' + smallestValue +'.')

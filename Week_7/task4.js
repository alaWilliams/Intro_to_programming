// 4 Task 4 Circumference of a Circle
// Create a program that calculates the circumference of a circle when radius is given (circumference = 2 * π *
// radius). Call this method three times with different parameters and print out the results

function calculateCircumference(radius) {
  let result = 2 * Math.PI * radius
  process.stdout.write(`Circumference of a circle with radius ${radius} is ${result}. \n`)
}

calculateCircumference(5)

calculateCircumference(10)

calculateCircumference(20)
function printHelloMessage() {
  console.log('Hello!');
}
printHelloMessage();

function calculate(number1, number2) {
  let sum = number1 + number2;
  process.stdout.write(sum.toString());
}

calculate(1, 2);
// Task 1 Letters and Numbers
// Create a program with two methods:
// 1. printLetters(): prints letters from a-z
// 2. printNumbers(): prints numbers from 1-9
// Call first printLetters() method, then printNumbers() and after that printLetters() again.


function printLetters() {
  let alphabet = ''
  for (let i = 10; i < 36; i++) {
    alphabet += i.toString(36)
  }
  return alphabet
};

console.log(printLetters());

function printNumbers() {
  let numbers = '';
  for (let i = 0; i < 10; i++) {
    numbers += i.toString()
  }
  return numbers;
}

console.log(printNumbers());
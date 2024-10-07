// Task 1 Letters and Numbers
// Create a program with two methods:
// 1. printLetters(): prints letters from a-z
// 2. printNumbers(): prints numbers from 1-9
// Call first printLetters() method, then printNumbers() and after that printLetters() again.


function printLetters() {
  for (let i = 10; i < 36; i++) {
    process.stdout.write(i.toString(36))
  }
};

printLetters();

function printNumbers() {
  for (let i = 0; i < 10; i++) {
    process.stdout.write(i.toString())
  }
}

printNumbers();
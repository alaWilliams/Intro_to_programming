// Task 2 Lorem Ipsum
// Create a method that prints out Lorem ipsum
// sentence (”Lorem Ipsum dolor sit amet, consectetur
// adipiscing elit. ”) ten times. Call this method.

function printTenTimes() {
  for (let i = 1; i < 10; i++) {
    let sentence = 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit.\n'
    process.stdout.write(sentence)
} }

printTenTimes()


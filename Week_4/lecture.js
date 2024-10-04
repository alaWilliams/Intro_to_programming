process.stdout.write("Please write your name. \nName: ");
process.stdin.on("data", function (inputFromUser) {
  for (let i = 0; i < 5; i++) {
    process.stdout.write(inputFromUser)
  };
  process.exit();
});
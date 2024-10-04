process.stdin.on("data", function(inputFromUser) {
  let user = Number(inputFromUser);
  let pi = Math.PI;
  if (user > 0) {
    let result = user * pi ;
    process.stdout.write(result.toString())
  } else {
    process.stdout.write("Negative numbers are not allowed! \n\n")
  }
  
  process.exit()

})

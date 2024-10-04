let x = 5
let y = 15
if (x >= 1 && x <= 10) {
  process.stdout.write( x + " is within the range. ")
}
if (x < 1 || x > 10) {
  process.stdout.write( x + " is outside the range. ")
}
if ((x >= 1 && x <= 10) && (y < 1 || y > 10)) {
  process.stdout.write( x + " is within the range. " + y + " is outside the range")
}
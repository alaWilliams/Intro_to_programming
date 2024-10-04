let age;
age = 20;
console.log(age)

let courseName = "Introduction to programming";
let credits = 3;
let startDate = "1.09.2024"
console.log("You are studying " + courseName + ". The course has started " + startDate + " and it is worth " + credits + " credits.");

let x = 5, y = 10, z = 15;
let result = x + z;

console.log("x: " + x + " y: " + y + " z: " + z);
console.log(result);

let x = 5;
let y = "5";
let z = 3;

console.log("x: " + x + " y: " + y + " z " + z);
// x + y
// x + z
// 3. y + z
// 4. x + y + z
let result1 =  x + z + y;
console.log(result1);



process.stdin.on("data", function(inputFromUser)
  {
  let givenInput = inputFromUser;
  process.stdout.write(givenInput);
  process.exit() ;
});

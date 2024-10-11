let tasksArray = ['something', 'else', 'new'];
let appMenu = ['Print menu', 'Add a task', 'Print tasks', 'Remove task'];

process.stdout.write('\n'+ 'TO DO APP'.padStart(25, '*').padEnd(50, '*') + '\n\n')

function printMenu() {
  for (let i = 0; i < appMenu.length; i++) {
    process.stdout.write(i + ' - ' + appMenu[i] + '\n')
  }
}
// printMenu();

function addTask() {
  process.stdin.on('data', function(input) {
    let task = input.toString().trim();
    tasksArray.push(task);
    process.exit()
  }
)
}

function printTasks() {
  process.stdout.write(`Your tasks are: \n`)
  for (let i = 0; i < tasksArray.length; i++) {
    process.stdout.write( (i+1) +' ' + tasksArray[i] + "\n")
  }
}

function removeTask() {
  process.stdout.write('Which task do you want to remove?\n\n');
  printTasks();
  process.stdin.on('data', function(number){
    let index = Number(number);
    console.log(index)

    process.exit();
  }
 
)
}

removeTask()
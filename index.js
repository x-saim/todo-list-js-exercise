
//new function that creates an object with properties and methods to keep track of the state:
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    // function to print out the provided task's status
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    // Mark a task as complete
    markCompleted: function() {
      this.complete = true;
    }

  };
  return task;
}


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
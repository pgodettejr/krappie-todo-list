// TODO: Don't forget to create a container element in the DOM for everything to generate under, then return that container element at the bottom of this file

// Global DOM elements related to adding projects and tasks to the app
const taskForm = document.getElementById("task-dialog");
const confirmTask = document.getElementById("confirmTask");
const cancelTask = document.getElementById("cancelTask");

// List of projects and tasks within those projects
const myProjects = [];

// Class for making "Task" objects & reporting the "Task" project
class Task {
  constructor(taskTitle, dueDate, time, priority, description) {
    this.taskTitle = taskTitle;
    this.dueDate = dueDate;
    this.time = time; // Changing this to "Add to Project" drop-down menu
    this.priority = priority; // TODO: Research how to add colors next to each option in the Drop down menu (img files that are color dots & add them as children in the HTML?)
    this.description = description; 
    // this.checked = false; <-- Checkbox whose default is not checked. Does NOT currently add the "checkbox" itself to the task (see HTML file for details)
    // this.id = Date.now(); <-- Id number for each project assigned at "random?". Would be used to find the task that the user clicked on to delete
  }
}

// Code example if we had gone with the nested object option (add tasks within the Add Project dialog)
// this.task = function addTaskToClass() {
//   todo: '';
// }

// Stores new Tasks objects into the myProjects array via user input. 
// NOTE: DOM elements may need to be changed to querySelector if they don't work
function addTask() {
  let taskTitle = document.getElementById("task-title").value; // Potentially add '.trim()' to the end of this line if there's whitespace that needs to be removed
  let dueDate = document.getElementById("due-date").value;
  let time = document.getElementById("task-time").value;
  let priority = document.getElementById("priority").value;
  let description = document.getElementById("description").value;
  // let task = document.getElementById("").value;

  if (taskTitle && dueDate && priority) { // Do we need !isNaN(dueDate) instead?
    const newTask = new Task(taskTitle, dueDate, time, priority, description);
    myProjects.push(newTask);
    // taskDisplay(); <-- Function for dynamically adding the task to the <main> area that needs to be written below
  }
}

function taskDisplay() {
  // For in loop goes here
    // Render all task info here using the "DOM level 1" technique (see "Traversing an HTML table with JS & DOM interfaces" documentation if needed)
    // e.g: bookDisplay() function in the Library project
}

export { taskForm, confirmTask, cancelTask, myProjects, Task, addTask, taskDisplay }

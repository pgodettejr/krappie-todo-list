// TODO: Don't forget to create a container element in the DOM for everything to generate under, then return that container element at the bottom of this file

// Global DOM elements related to adding projects and tasks to the app
const taskForm = document.getElementById("task-dialog");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");

// List of projects and tasks within those projects
const myProjects = [];

// Class for making "Task" objects & reporting the "Task" project
class Task {
  constructor(title, dueDate, time, priority, description, task) {
    this.title = title;
    this.dueDate = dueDate;
    this.time = time;
    this.priority = priority; // Research how to add colors next to each option in the Drop down menu and how to make this "required" in the <select> element
    this.description = description;
    this.task = task; // Changing this to "Add to Project" drop-down menu, so might not even need this?
    // this.checked = false; <-- Checkbox whose default is not checked. Does NOT currently add the "checkbox" itself to the task (see HTML file for details)
    // this.id = Date.now(); <-- Id number for each project assigned at "random?"
  }
}
// this.task = function addTaskToClass() {
//   todo: '';
// }

// Stores new Tasks objects into the myProjects array via user input. 
// NOTE: DOM elements may need to be changed to querySelector if they don't work
function addTask() {
  let title = document.getElementById("task-title").value;
  let dueDate = document.getElementById("due-date").value;
  let time = document.getElementById("task-time").value;
  let priority = document.getElementById("priority").value;
  let description = document.getElementById("description").value;
  // let task = document.getElementById("").value;

  if (title && dueDate && priority) { // Do we need !isNaN(dueDate) instead?
    const newTask = new Task(title, dueDate, time, priority, description, task)
    myProjects.push(newTask);
    // taskDisplay(); <-- Function for dynamically adding the task to the <main> area that needs to be written below
  }
}

function taskDisplay() {
  // For in loop goes here
    // Generate all task info here using the "DOM level 1" technique (see "Traversing an HTML table with JS & DOM interfaces" documentation if needed)
    // e.g: bookDisplay() function in the Library project
    // TODO: Also generate the project as a button in the sidebar?
}

export { taskForm, confirmBtn, cancelBtn, myProjects, Task, addTask, taskDisplay }

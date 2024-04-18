// Global DOM elements related to adding projects and tasks to the app
const projectForm = document.getElementById("project-dialog");

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
    this.task = task; // This will be an "Add Task" button so might not even need this. Button will pull up another <dialog> for tasks to save to this
  }
}

// Stores new Tasks objects into the myProjects array via user input. 
// NOTE: DOM elements may need to be changed to querySelector if they don't work
function addTaskToProject() {
  let title = document.getElementById("project-title").value;
  let dueDate = document.getElementById("due-date").value;
  let time = document.getElementById("project-time").value;
  let priority = document.getElementById("priority").value;
  let description = document.getElementById("description").value;
  // let task = document.getElementById("").value;

  if (title && dueDate && priority) { // Do we need !isNaN(dueDate) instead?
    const newTask = new Task(title, dueDate, time, priority, description, task)
    myProjects.push(newTask);
    // projectDisplay(); <-- Function for dynamically adding the project to the <main> area that needs to be written below
  }
}

function projectDisplay() {
  // For in loop goes here
    // Generate all project/task info here using the "DOM level 1" technique (see "Traversing an HTML table with JS & DOM interfaces" documentation if needed)
    // e.g: bookDisplay() function in the Library project
}

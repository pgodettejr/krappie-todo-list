// TODO: Don't forget to create a container element in the DOM for everything to generate under, then return that container element at the bottom of this file

// import { projectDisplay } from "./projects";

// Global DOM elements related to adding projects and tasks to the app
const taskForm = document.getElementById("task-dialog");
const confirmTask = document.getElementById("confirmTask");
const cancelTask = document.getElementById("cancelTask");

// List of projects and tasks within those projects
// const myProjects = [];

// Class for making "Task" objects & reporting the "Task" project
// class Task {
//   constructor(taskTitle, dueDate, time, priority, description, checked, id) {
//     this.taskTitle = taskTitle;
//     this.dueDate = dueDate;
//     this.time = time; // Changing this to "Add to Project" drop-down menu
//     this.priority = priority; // TODO: Research how to add colors next to each option in the Drop down menu (img files that are color dots & add them as children in the HTML?)
//     this.description = description; 
//     this.checked = false; // Checkbox whose default is not checked. Does NOT currently add the "checkbox" itself to the task (see HTML file for details)
//     this.id = Date.now(); // Id number for each project assigned at "random?". Would be used to find the task that the user clicked on to delete
//   }
// }

// Code example if we had gone with the nested object option (add tasks within the Add Project dialog)
// this.task = function addTaskToClass() {
//   todo: '';
// }

// Stores new Tasks objects into the myProjects array via user input. 
// NOTE: DOM elements may need to be changed to querySelector if they don't work
// function addTask() {
//   let taskTitle = document.getElementById("task-title").value; // Potentially add '.trim()' to the end of this line if there's whitespace that needs to be removed
//   let dueDate = document.getElementById("due-date").value;
//   let time = document.getElementById("task-time").value;
//   let priority = document.getElementById("priority").value;
//   let description = document.getElementById("description").value;
//   // let task = document.getElementById("").value;

//   if (taskTitle && dueDate && priority) { // Do we need !isNaN(dueDate) instead?
//     const newTask = new Task(taskTitle, dueDate, time, priority, description, checked, id);
//     myProjects.push(newTask); // Possibly change this to 'arr.push(newTask)' to reflect the task being added to the project array that was set up via user input
//     // taskDisplay(); <-- Function for dynamically adding the task to the <main> area that needs to be written below
//   }
// }

// Render all task info here using the "DOM level 1" technique (see "Traversing an HTML table with JS & DOM interfaces" documentation if needed)
// Function for dynamically adding the task to the <main> area
// e.g: bookDisplay() function in the Library project
function taskDisplay() {
  for (const task in myProjects) {
    // Should the actual rendering of the <ul> be handled by index.js? (have this function run in index.js, then append everything to the project <ul> afterwards in index.js)
    // const taskList = document.createElement("ul");
    // taskList.classList.add("task-info");

    // Checkbox rendering goes here or under taskName
    const isChecked = task.checked ? 'done' : '';

    // Sets up the name of the task entered as a list element so the user can have a list of tasks
    const taskName = document.createElement("li");
    taskName.setAttribute('data-key', task.id);
    taskName.classList.add(`todo-item ${isChecked}`);

    // Renders <p> tags for the Date, Time, Priority level and Description box from the "Add Task" form (to be used as parents for the text info below)
    const taskDate = document.createElement("p");
    const taskTime = document.createElement("p");
    const taskPriority = document.createElement("p");
    const taskDescription = document.createElement("p");

    taskDate.classList.add("task-date");
    taskTime.classList.add("task-time");
    taskPriority.classList.add("task-priority");
    taskDescription.classList.add("task-description");

    // Text info DOM that takes user input from the "Add Task" form and creates text nodes to be attached to the <p> tags above
    const taskNameInfo = document.createTextNode(`${myProjects[task].taskTitle}`);
    const taskDateInfo = document.createTextNode(`${myProjects[task].dueDate}`);
    const taskTimeInfo = document.createTextNode(`${myProjects[task].time}`);
    const taskPriorityInfo = document.createTextNode(`${myProjects[task].priority}`);
    const taskDescriptionInfo = document.createTextNode(`${myProjects[task].description}`);

    // Attaches text info via user input to the <p> tags that were created
    taskName.appendChild(taskNameInfo);
    taskDate.appendChild(taskDateInfo);
    taskTime.appendChild(taskTimeInfo);
    taskPriority.appendChild(taskPriorityInfo);
    taskDescription.appendChild(taskDescriptionInfo);

    // Places the Date, Time, Priority level and Description as children under the Task Name <li>
    // TODO: Test to see if this looks ok in the UI. Think of a different implementation if it doesn't
    taskName.appendChild(taskDate);
    taskName.appendChild(taskTime);
    taskName.appendChild(taskPriority);
    taskName.appendChild(taskDescription);

    // TODO: Figure out how to append taskName to the <ul> that was made in projects.js
    projectName.appendChild(taskName); // Don't think it's this simple since projectName is in a separate file

    // TODO: Code for a conditional statement that checks to see if the project the user selected exists before adding the task to it (if else statement)
  }
}

export { taskForm, confirmTask, cancelTask, myProjects, Task, addTask, taskDisplay }

// TODO: if remove button functionality for existing projects goes here, don't forget to add the myProjects.splice(-1, 1) method to it;

import { taskForm, confirmTask, cancelTask, taskDisplay } from './tasks.js';
import { projectForm, confirmProject, cancelProject, projectDisplay } from './projects.js';
import './styles.css';
import reverbFart from './sounds/quick-fart-with-reverb.mp3';
import Gear from './img/settings.png';
import Plus from './img/plus.png';

// Dialog forms DOM
const taskDialog = document.getElementById("task-dialog");
const projectDialog = document.getElementById("project-dialog");

// Sidebar buttons DOM
const sidebarTaskBtn = document.getElementById("add-task-2");
const sidebarInboxBtn = document.getElementById("inbox-button");
const sidebarTodayBtn = document.getElementById("today-button");
const sidebarUpcomingBtn = document.getElementById("upcoming-button");
const sidebarProjectBtn = document.getElementById("add-project");

// Icons for Add Task and Settings buttons in the header
const headerTask = document.getElementById("add-task");
const headerSettings = document.getElementById("settings");

const settingsIcon = new Image();
settingsIcon.src = Gear;

const taskIcon = new Image();
taskIcon.src = Plus;

headerSettings.appendChild(settingsIcon);
headerTask.appendChild(taskIcon);

// List of projects and tasks within those projects
export const myProjects = [];

// Function for making "Task" objects & reporting the "Task" added to the project
function Task (taskTitle, dueDate, priority, description) {
  this.taskTitle = taskTitle;
  this.dueDate = dueDate;
  this.priority = priority;
  this.description = description;

  this.checked = false // Checkbox whose default is not checked. Does NOT currently add the "checkbox" itself to the task (see HTML file for details). May need to be a method.
  this.id = function() { // ID number for each project assigned at "random?". Would be used to find the task that the user clicked on to delete
    let id = Date.now();
    return id;
  }
}

// Function for making "Project" objects to be created as a project inside of an array
function Project (projectTitle) {
  this.projectTitle = projectTitle;
  this.tasks = []; // Initializes tasks as an empty array

  this.addTask = function(taskTitle, dueDate, priority, description) {
    const newTask = new Task(taskTitle, dueDate, priority, description);
    this.tasks.push(newTask);
  }
}

// Factory version example of the "Task" constructor above
// function task (taskTitle, dueDate, priority, description) {
//   let checked = false;
//   let id = Date.now();

//   return { taskTitle, dueDate, priority, description, checked, id };
// }

// Factory version example of the "Project" constructor above
// function project (projectTitle) {
//   const tasks = [];
//   function addTask() {
//     tasks.push(task(taskTitle, dueDate, priority, description));
//   }

//   return { projectTitle, tasks, addTask }
// }

// Stores new "Project" objects into a new array via user input
// OPTION: Add "Priority Level" drop-down menu and "Description" text box. Would also need to add them to the Class above. Need to be rendered as well.
function addProject() {
  let projectTitle = document.getElementById("project-title").value; // Potentially add '.trim()' to the end of this line if there's whitespace that needs to be removed

  if (projectTitle) {
    const newProject = new Project(projectTitle);
    myProjects.push(newProject);
    projectDisplay();
  }
}

function addTaskToProject(projectIndex) {
  let taskTitle = document.getElementById("task-title").value; // Potentially add '.trim()' to the end of this line if there's whitespace that needs to be removed
  let dueDate = document.getElementById("due-date").value;
  let priority = document.getElementById("priority").value;
  let description = document.getElementById("description").value;

  if (taskTitle && dueDate && priority) { // Do we need !isNaN(dueDate) instead?
    myProjects[projectIndex].addTask(taskTitle, dueDate, priority, description);
    taskDisplay();
  }
}

// Function for playing fart sound when user interacts with app logo. Click is enabled, but how can we also enable other interactions for accessibility like 'keydown' etc?
function poopSound() {
  const poopLogo = document.querySelector(".app-logo");

  poopLogo.addEventListener('click', function(e) {
    // Create the audio element via JS
    const audio = document.createElement("audio");
    audio.setAttribute("data-image", "logo-sound");

    // Wire the mp3 file up to the already existing img file
    const imageButton = document.querySelector(".image-button");
    audio.src = reverbFart;

    // Text to show if the users' browser doesn't support the mp3 file
    const audioError = document.createTextNode("Your browser does not support the HTML5 audio tag.");
    audio.appendChild(audioError);

    // Append the audio itself to the image file
    imageButton.appendChild(audio);

    if(!audio) return; // stops function from running altogether
    audio.currentTime = 1; // rewinds file to just before the sound clip starts (1 second mark)
    audio.play();
  });
};

poopSound();

// Header "Add Task" button functionality that brings up the form to enter Task details
headerTask.addEventListener('click', () => {
  taskDialog.showModal();
});

// Sidebar "Add Task" button functionality that brings up the form to enter Task details
sidebarTaskBtn.addEventListener('click', () => {
  taskDialog.showModal();
});

// "Confirm" button functionality that checks that all required task sections were completed by the user, then submits it to the main area
confirmTask.addEventListener('click', (e) => {
  let taskComplete = document.getElementById("task-form").checkValidity();
  if (taskComplete) {
    e.preventDefault();
    addTaskToProject();
    document.getElementById("task-form").reset();
    taskDialog.close();
  }
});

// "Cancel" button functionality that deletes all info that was entered, then closes the Task form
cancelTask.addEventListener('click', () => {
  document.getElementById("task-form").reset();
  taskDialog.close();
});

// Sidebar "Add Project" button functionality that brings up the form to enter Project details
sidebarProjectBtn.addEventListener('click', () => {
  projectDialog.showModal();
});

// "Confirm" button functionality that checks that all required project sections were completed by the user, then submits it to the main area
confirmProject.addEventListener('click', (e) => {
  let projectComplete = document.getElementById("project-form").checkValidity();
  if (projectComplete) {
    e.preventDefault();
    addProject();
    document.getElementById("project-form").reset();
    projectDialog.close();
  }
});

// "Cancel" button functionality that deletes all info that was entered, then closes the Project form
cancelProject.addEventListener('click', () => {
  document.getElementById("project-form").reset();
  projectDialog.close();
});

// main.appendChild(whatever the 'default' project showing all tasks will be); 
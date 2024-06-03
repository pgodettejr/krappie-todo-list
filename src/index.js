// TODO: if remove button functionality for existing projects goes here, don't forget to add the myProjects.splice(-1, 1) method to it;

import { taskForm, confirmTask, cancelTask, taskDisplay, projectForm, confirmProject, cancelProject, projectDisplay } from './krappieUI.js';
import './styles.css';
import reverbFart from './sounds/quick-fart-with-reverb.mp3';
import Plus from './img/plus.png';

// Dialog forms DOM
const taskDialog = document.getElementById("task-dialog");
const projectDialog = document.getElementById("project-dialog");

// Sidebar buttons DOM
const sidebarTaskBtn = document.getElementById("add-task-2");
const sidebarTodayBtn = document.getElementById("today-button");
const sidebarProjectBtn = document.getElementById("add-project");

// Icon for Add Task button in the header
const headerTask = document.getElementById("add-task");

const taskIcon = new Image();
taskIcon.src = Plus;

headerTask.appendChild(taskIcon);

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
// TODO: if remove button functionality for existing projects goes here, don't forget to add the myProjects.splice(-1, 1) method to it;

import { taskForm, confirmTask, cancelTask, renderTask, projectForm, confirmProject, cancelProject, renderDefault, renderProject, populateProjects } from './krappieUI.js';
import { createProject, appState } from './projects.js';
import { tasks, createTask, removeTask, updateTask, toggleTaskChecked, storeTask } from './tasks.js';
import './styles.css';
import reverbFart from './sounds/quick-fart-with-reverb.mp3';
import Plus from './img/plus.png';

appState.myProjects.push(appState.defaultProject);
renderDefault();
// main.appendChild(whatever the 'default' project showing all tasks will be); 

// Dialog forms DOM
const taskDialog = document.getElementById("task-dialog");
const projectDialog = document.getElementById("project-dialog");

// Sidebar buttons DOM
const sidebarTaskBtn = document.getElementById("add-task-2");
const sidebarProjectBtn = document.getElementById("add-project");

// Update and Delete buttons DOM for Projects
const updateProjectBtn = document.getElementById("update-project");
const deleteProjectBtn = document. getElementById("delete-project");

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
  populateProjects();
});

// Sidebar "Add Task" button functionality that brings up the form to enter Task details
sidebarTaskBtn.addEventListener('click', () => {
  taskDialog.showModal();
  populateProjects();
});

// "Confirm" button functionality that checks that all required task sections were completed by the user, then submits it to the main area and closes the Task form
// TODO: This is the only button that doesn't work for several reasons
confirmTask.addEventListener('click', (e) => {
  let taskComplete = document.getElementById("task-form").checkValidity();
  if (taskComplete) {
    e.preventDefault();
    storeTask();
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

// "Confirm" button functionality that checks that all required project sections were completed by the user, then submits it to the main area and closes the Project form
confirmProject.addEventListener('click', (e) => {
  let projectComplete = document.getElementById("project-form").checkValidity();
  if (projectComplete) {
    e.preventDefault();
    appState.storeProject();
    document.getElementById("project-form").reset();
    projectDialog.close();
  }
});

// "Cancel" button functionality that deletes all info that was entered, then closes the Project form
cancelProject.addEventListener('click', () => {
  document.getElementById("project-form").reset();
  projectDialog.close();
});

// "Update Project" button functionality that brings up the Project form again to enter a new name
updateProjectBtn.addEventListener('click', () => {
  // Code to bring up form goes here (if we go with option 1 or 2)

  // OPTION 1: Use the same form used to make new Projects 
  // Would need a nested conditional that reads if the project already exists to change the name and place it in confirmProject button above (under it's existing 'if' statement)

  // **OPTION 2: Make a new form specifically for updating existing Projects and putting the code to pull up the form here (updateProject function would go in separate button)

  // OPTION 3: Figure out how to make the text itself switch to an editable state
})

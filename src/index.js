// TODO: if remove button functionality for existing projects goes here, don't forget to add the myProjects.splice(-1, 1) method to it;

import * as krappieUI from './krappieUI.js';
import { createProject, appState } from './projects.js';
import { tasks, createTask, removeTask, updateTask, toggleTaskChecked, storeTask } from './tasks.js';
import './styles.css';
import reverbFart from './sounds/quick-fart-with-reverb.mp3';
import Plus from './img/plus.png';

appState.myProjects.push(appState.defaultProject);
krappieUI.renderDefault();

// Main area DOM
const mainArea = document.querySelector("main");
const projectHeading = document.querySelector(".project-name");

// Forms DOM
const taskForm = document.getElementById("task-form");
const projectForm = document.getElementById("project-form");
const taskUpdateForm = document.getElementById("task-update-form");
const projectUpdateForm = document.getElementById("project-update-form");

// Sidebar DOM
const projectMenu = document.querySelector(".menu-2");
const sidebarTaskBtn = document.getElementById("add-task-2");
const sidebarProjectBtn = document.getElementById("add-project");
const projectButton = document.querySelector(".project-btn");

// Update and Delete buttons DOM for Projects. 
// Button group variables will be permanent if all projects end up being shown on main area of the UI
// const updateProjectButtons = document.querySelectorAll(".update-project");
const deleteProjectButtons = document.querySelectorAll(".delete-project");
// const updateProjectBtn = document.querySelector(".update-project");
// const deleteProjectBtn = document.querySelector(".delete-project");

// Icon for Add Task button in the header
const headerTask = document.getElementById("add-task");

const taskIcon = new Image();
taskIcon.src = Plus;

headerTask.appendChild(taskIcon);

// Function for playing fart sound when user interacts with app logo. Click is enabled, but how can we also enable other interactions for accessibility like 'keydown' etc?
function poopSound() {
  const poopLogo = document.querySelector(".app-logo");

  poopLogo.addEventListener('click', function() { // TODO: Put 'e' back in here if the audio button no longer works
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
  krappieUI.taskDialog.showModal();
  krappieUI.populateProjects();
});

// Sidebar "Add Task" button functionality that brings up the form to enter Task details
sidebarTaskBtn.addEventListener('click', () => {
  krappieUI.taskDialog.showModal();
  krappieUI.populateProjects();
});

// TODO: Retest all Task related buttons within any forms once the Update Task options are set up throughout the app

// "Confirm" button functionality that checks that all required task sections were completed by the user, then submits it to the main area and closes the Task form
// TODO: This is the only button that doesn't work for several reasons
krappieUI.confirmTask.addEventListener('click', (e) => {
  let taskComplete = document.getElementById("task-form").checkValidity();
  if (taskComplete) {
    e.preventDefault();
    storeTask();
    taskForm.reset();
    krappieUI.taskDialog.close();
  }
});

// "Cancel" button functionality that deletes all info that was entered, then closes the Task form
krappieUI.cancelTask.addEventListener('click', () => {
  if (taskUpdateForm) {
    taskUpdateForm.reset();
  } else {
    taskForm.reset();
  }
  
  krappieUI.taskDialog.close();
});

// "Update" button functionality that checks that all required sections were updated by the user, then submits the changes to the main area and closes the Update form
krappieUI.editTask.addEventListener('click', (e) => {
  let taskEdit = document.getElementById("task-update-form").checkValidity();
  if (taskEdit) {
    e.preventDefault();
    updateTask();

    // TODO: Function call that renders the update goes here

    taskUpdateForm.reset();
    krappieUI.taskUpdateDialog.close();
  }
});

// Sidebar "Add Project" button functionality that brings up the form to enter Project details
sidebarProjectBtn.addEventListener('click', () => {
  krappieUI.projectDialog.showModal();
});

// "Confirm" button functionality that checks that all required project sections were completed by the user, then submits it to the main area and closes the Project form
krappieUI.confirmProject.addEventListener('click', (e) => {
  let projectComplete = document.getElementById("project-form").checkValidity();
  if (projectComplete) {
    e.preventDefault();
    appState.storeProject();
    projectForm.reset();
    krappieUI.projectDialog.close();
  }
});

// "Cancel" button functionality that deletes all info that was entered, then closes the Project form
krappieUI.cancelProject.addEventListener('click', () => {
  if (projectUpdateForm) {
    projectUpdateForm.reset();
  } else {
    projectForm.reset();
  }
  
  krappieUI.projectDialog.close();
});

// Variable for updating projects in the UI and array
let currentProjectName;

// "Update Project" button functionality that brings up the Project form again to enter a new name
// OPTION: May need to change EventTarget from 'mainArea' to 'document' if future bugs show up & also change 'if' condition to 'e.target.classList.contains("update-project")')
mainArea.addEventListener('click', (e) => {
  if (e.target && e.target.closest(".update-project")) {
    const wrapper = e.target.closest(".project-wrapper");
    currentProjectName = wrapper.querySelector(".project-name").textContent;
    krappieUI.projectUpdateDialog.showModal();
  }
});

// "Update" button functionality that checks that all required sections were updated by the user, then submits the changes to the main area and closes the Update form
krappieUI.editProject.addEventListener('click', (e) => {
  let projectEdit = document.getElementById("project-update-form").checkValidity();
  if (projectEdit) {
    e.preventDefault();

    let newProjectName = document.getElementById("project-update-title").value;
    const projectButtons = document.querySelectorAll(".project-btn");
    const projectHeadings = document.querySelectorAll(".project-name");

    appState.updateProject(currentProjectName, newProjectName);

    // Loop through all project sidebar buttons to find the right one to update, then update the text
    projectButtons.forEach(button => {
      if (button.getAttribute("data-project-title") === currentProjectName) {
        button.textContent = newProjectName;
        button.setAttribute("data-project-title", newProjectName);
      }
    });

    // Loop through all 'p' tags (project headings) to find the right one to update, then update the text
    projectHeadings.forEach(heading => {
      if (heading.textContent === currentProjectName) {
        heading.textContent = newProjectName;
      }
    });

    projectUpdateForm.reset();
    krappieUI.projectUpdateDialog.close();

    // Remove this once the Delete Project buttons work correctly (correct project still needs to be removed from the array)
    console.log(appState.myProjects);
  }
});

// "Delete Project" button functionality that removes the project both from the myProjects array and the UI
mainArea.addEventListener('click', (e) => {
  if (e.target && e.target.closest(".delete-project")) {
    const targetProject = e.target.closest(".project-wrapper");
    currentProjectName = targetProject.querySelector(".project-name").textContent;

    if (targetProject) {
      const projectButtons = document.querySelectorAll(".project-btn");

      // TODO: When the console logs the array below, the first project in the array is removed. Not the project we targeted (even with parameters)
      // Either the issue is the parameter/argument I'm passing or it's the deleteProject method itself under the projects module (which I need to update anyway)
      appState.deleteProject(currentProjectName); // 'targetProject' was a parameter we previously tried

      // Loop through all project sidebar buttons to find the right one to delete, then delete it
      projectButtons.forEach(button => {
        if (button.getAttribute("data-project-title") === currentProjectName) {
          projectMenu.removeChild(button);
        }
      });
      
      mainArea.removeChild(targetProject);
    }

    // TODO: Double checks to make sure the project in the 'myProjects' array has been deleted (remove this once fixed)
    console.log(appState.myProjects);
  }
});


// Old code

// Previous "Update Project" button functionality

// updateProjectButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     krappieUI.projectUpdateDialog.showModal();
//   });
// });

// Previous "Delete Project" button functionality

// deleteProjectButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const targetProject = document.querySelector("project-wrapper");
  
//     appState.deleteProject(); // TODO: Make sure to double check 'myProjects' array after deleting a project to see if this updated the array correctly
  
//     if (projectButton.textContent === projectHeading) {
//       projectMenu.removeChild(projectButton);
//     }
  
//     mainArea.removeChild(targetProject);
//   })
// });

// Previous "Update" form button functionality

// Code says this was changing the text of the sidebar button for the project to the new title, but didn't show in the UI. 
    // Because I was missing a dot when declaring the variable in the DOM above (due to it being a class) :')
    // Tried 'projectButton.textContent === currentProjectTitle' but I get an undefined error on textContent
    // This almost got there as a solution but even after fixing the DOM typo, it can't distinguish between which button text to change if there are multiple projects
    // if (projectButton) {
    //   projectButton.textContent = newProjectTitle;
    // }

    // Attempt to go back to previous iteration to change sidebar project button text & end up with 'Uncaught TypeError: Cannot set properties of null (setting 'textContent')'
    // projectButton.textContent = newProjectTitle;

// Previous attempts to get the correct projects to Update via update form as well as getting the Update buttons under each project to work in the first place
// Was only changing the very first project in the main area (the Default one currently) no matter what Update Project button was pressed on what project
// Need to figure out how to target the text of the current Project title for the correct Project that was targeted, then update appState.updateProject (the array) below

// document.addEventListener('click', (e) => {
//   if (e.target.classList.contains("update-project")) {
//     const wrapper = e.target.closest(".project-wrapper");
//     currentProjectName = wrapper.querySelector(".project-name").textContent;
//     krappieUI.projectUpdateDialog.showModal();
//   }
// })
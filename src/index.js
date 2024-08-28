// TODO: Hitting the "Enter" key on the keyboard doesn't submit & close any form it seems. Either fix here in all the button logic or in the HTML itself?
// OPTION: Could add 'document.addEventListener('DOMContentLoaded', () => { move EVERYTHING in here except imports });' to ensure they are attached correctly after DOM becomes available

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
// const projectHeading = document.querySelector(".project-name");

// Forms DOM
const taskForm = document.getElementById("task-form");
const projectForm = document.getElementById("project-form");
const taskUpdateForm = document.getElementById("task-update-form");
const projectUpdateForm = document.getElementById("project-update-form");

// Sidebar DOM
const projectMenu = document.querySelector(".menu-2");
const sidebarTaskBtn = document.getElementById("add-task-2");
const sidebarProjectBtn = document.getElementById("add-project");
// const projectButton = document.querySelector(".project-btn");

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
taskIcon.classList.add("image-button");

headerTask.appendChild(taskIcon);

// Function for playing fart sound when user interacts with app logo. Click is enabled, but how can we also enable other interactions for accessibility like 'keydown' etc?
function poopSound() {
  const poopLogo = document.querySelector(".app-logo");

  poopLogo.addEventListener('click', function() {
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

    if(!audio) return; // Stops function from running altogether
    audio.currentTime = 1; // Rewinds file to just before the sound clip starts (1 second mark)
    audio.play();
  });
};

poopSound();

// Search bar DOM
const searchBar = document.getElementById("search-text");

// Search filter event 
searchBar.addEventListener('keyup', searchFilter);

// Search bar functionality
function searchFilter (e) {
  // Convert text to lowercase
  let searchTextConvert = e.target.value.toLowerCase();

  // List of projects
  let projectList = document.querySelectorAll(".project-wrapper");

  // Filters out the project the user wants to search for
  projectList.forEach(project => {
    let projectName = project.firstChild.textContent;

    if (projectName.toLowerCase().indexOf(searchTextConvert) != -1) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}

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
krappieUI.confirmTask.addEventListener('click', (e) => {
  let taskComplete = document.getElementById("task-form").checkValidity();
  if (taskComplete) {
    e.preventDefault();
    storeTask();
    krappieUI.renderTask();
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

let taskId;

// "Update Task" button functionality that brings up the Task form again to enter new details
mainArea.addEventListener('click', (e) => {
  if (e.target && e.target.closest(".update-task")) {
    const taskItem = e.target.closest(".task-item-");
    if (taskItem) {
      taskId = taskItem.getAttribute("data-key");
      krappieUI.taskUpdateDialog.showModal();
      krappieUI.populateProjects(); // TODO: This is not populating any list of current projects - is it the function itself? (only populates on initial creation of task)
    } else {
      console.error('Task not found in the tasks array');
    }
  }
});

// "Update" button functionality that checks that all required sections were updated by the user, then submits the changes to the main area and closes the Update form
// TODO: Need to figure out "Add to Project" logic - how are we going to get the code to remove the task from one project and add it to another if the user so chooses?
krappieUI.editTask.addEventListener('click', (e) => {
  let taskEdit = document.getElementById("task-update-form").checkValidity();
  if (taskEdit) {
    e.preventDefault();

    // Values of all updated form sections
    // TODO: Remove "new" from all of these properties and use original camelCase names
    const updatedTask = {
      newTaskTitle: document.getElementById("update-task-title").value.trim(),
      newDueDate: document.getElementById("update-due-date").value,
      newProject: document.getElementById("update-add-to-project").value,
      newPriority: document.getElementById("update-priority").value,
      newDescription: document.getElementById("update-description").value
    };

    // TODO: Do we need a conditional that shows if the newProject does NOT match the name of the current project in the UI, update where the task is rendered?

    // Run the updateTask function
    updateTask(taskId, updatedTask);

    // TODO: Logs the array to see if the task updated (it doesn't currently)
    console.log(appState.myProjects);

    // Function call that renders the update
    // TODO: Currently doesn't render the updated values because renderTask isn't attached to the update form at all, only the original form. 
    // Figure out another method to render (either update renderTask itself to include update form or render the elements directly on here somehow - see editProject below?)
    krappieUI.renderTask();
    
    
    // TODO: Some type of 'forEach' method for all the tasks in the project until JS finds the right task to update?
    
    taskUpdateForm.reset();
    krappieUI.taskUpdateDialog.close();
  }
});

// Task checkbox functionality. Detects the task being checked off as completed. Currently targets individual checkbox elements based on how everything is rendered currently.
// TODO: This may not work to UNCHECK a task. Would need a conditional if/else added in if it doesn't.
// const completedTask = document.querySelector("p[data-key]");
// const checkboxToggle = document.querySelector(".js-tick");

// TODO: Currently shows "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')", removing functionality for all buttons in the UI. Find out why.
// Tried removing "p" in the variable above. Didn't work.
// completedTask.addEventListener('click', (e) => {
//   if (e.target.classList.contains('js-tick')) {
//     const taskItem = e.target.parentElement.dataset.key;
//     toggleTaskChecked(taskItem);
//     completedTask.style.textDecoration = "line-through";
//     // renderTask(toggleTaskChecked.toggleStatus);
//   }
// });

// TODO: Also shows "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')".
// checkboxToggle.addEventListener('click', (e) => {
//   const taskItem = e.target.parentElement.dataset.key;
//   toggleTaskChecked(taskItem);
//   taskItem.style.textDecoration = "line-through";
//   // renderTask(toggleTaskChecked.toggleStatus);
// });

// 'forEach' method attempt of the above
// TODO: Currently goes through this function, then the other 'mainArea' event listeners below then back to this function when checkboxes are clicked but box doesn't check off. Find out why ("other" example solutions to get the checkboxes to toggle properly on tasks). 
// I don't think it matters which code we go with since the issue seems to be the toggle function in tasks, not this function
mainArea.addEventListener('click', (e) => { // TODO: Remove 'e' back if the conditional doesn't work
  const checkboxToggle = document.querySelectorAll(".js-tick");

  checkboxToggle.forEach(checkbox => {
    // const taskItem = document.querySelector("data-key"); // Coming up as 'null' so the rest of this method doesn't work
    const taskClass = document.querySelector(".task-item-");
    // const taskLabel = document.querySelector("label[for]");
  
    // Previous code: (taskItem === taskLabel && taskClass !== "task-item-done") is worse because it doesn't even make it to the toggle classList line before the code finishes (nothing changes in the UI)
    if (e.target.tagName.toLowerCase() === "input") { 
      toggleTaskChecked(taskClass);
      checkbox.checked = true;
      taskClass.style.textDecoration = "line-through";
      taskClass.classList.toggle("task-item-done");
      // renderTask(toggleTaskChecked.toggleStatus)
    }
  });
});

// Previous attempt of code just above

// mainArea.addEventListener('click', () => {
//   const checkboxToggle = document.querySelectorAll(".js-tick");

//   checkboxToggle.forEach(checkbox => {
//     const taskItem = checkbox.target.parentElement.dataset.key; // Uncaught TypeError that can't read the parent element (undefined) either due to this line or renderTask in UI
//     const taskClass = checkbox.target.parentElement.classList;
  
//     if (taskClass !== "task-item-done") {
//       toggleTaskChecked(taskItem);
//       checkbox.checked = true;
//       taskItem.style.textDecoration = "line-through";
//       taskClass.setAttribute("class", "task-item-done");
//       // renderTask(toggleTaskChecked.toggleStatus)
//     }
//   });
// });

// "Delete Task" button functionality that removes the task both from the nested tasks array inside the myProjects array and the UI
mainArea.addEventListener('click', (e) => {
  if (e.target && e.target.closest(".delete-task")) {
    const taskItem = e.target.closest(".task-item");
    taskId = taskItem.getAttribute("data-key");

    // Removes the task from the tasks array nested inside of the projects in appState
    removeTask(taskId); // OPTION: (appState.myProjects.tasks.taskId);

    // Removes the task from the UI
    taskItem.remove();
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
    krappieUI.renderProject();
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

// Variable used for updating and deleting projects in the UI and 'myProjects' array in appState (projects.js)
let currentProjectName;

// "Update Project" button functionality that brings up the Project form again to enter a new name
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

    let newProjectName = document.getElementById("project-update-title").value.trim(); // Remove '.trim()' later on if it causes errors (added to address any whitespace)
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
  }
});

// "Delete Project" button functionality that removes the project both from the myProjects array and the UI
// TODO: Test this function again to make sure that all UI elements and the actual project in the myProjects array do get removed
// TODO: if remove button functionality for existing projects goes here, don't forget to add the myProjects.splice(-1, 1) method to it;
mainArea.addEventListener('click', (e) => {
  if (e.target && e.target.closest(".delete-project")) {
    // e.preventDefault() here potentially to stop form submission to the backend of the browser?
    const targetProject = e.target.closest(".project-wrapper");
    currentProjectName = targetProject.querySelector(".project-name").textContent;

    if (targetProject) {
      const projectButtons = document.querySelectorAll(".project-btn");

      appState.deleteProject(currentProjectName);

      // Loop through all project sidebar buttons to find the right one to delete, then delete it
      projectButtons.forEach(button => {
        if (button.getAttribute("data-project-title") === currentProjectName) {
          projectMenu.removeChild(button);
        }
      });
      
      mainArea.removeChild(targetProject);
    }
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
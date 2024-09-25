// TODO: Hitting the "Enter" key on the keyboard doesn't submit & close any form it seems. Either fix here in all the button logic or in the HTML itself?
// TODO: When projects alone are added to localStorage, only the latest project shows in the Applications tab in DevTools under the storage key, but once a task is added, all the projects show. Is this fine?
// OPTION: Could add 'document.addEventListener('DOMContentLoaded', () => { move EVERYTHING in here except imports });' to ensure they are attached correctly after DOM becomes available

import * as krappieUI from './krappieUI.js';
import { createProject, appState } from './projects.js';
import { tasks, createTask, removeTask, updateTask, toggleTaskChecked, storeTask } from './tasks.js';
import { saveToStorage, getFromStorage } from "./localStorage.js";
import './styles.css';
import reverbFart from './sounds/quick-fart-with-reverb.mp3';
import Plus from './img/plus.png';

// TODO: Projects are rendering multiple times (undefined 4x, Today, any other projects, Today again). Find out why
// Quick fix removed the 'undefined' projects but 'Today' still renders a second time at the end
// OPTION: May need to add the for loop 'for (let i = 0; i < 1_000_000_000; i++);' to delay DOM parsing, forcing this to launch later
// OPTION: Could also add a condition 'if (document.readyState === "loading") { code below goes here } else { console.info("DOM already") }
document.addEventListener('DOMContentLoaded', () => {
  appState.myProjects.push(appState.defaultProject);
  krappieUI.renderDefault();

  const saveState = getFromStorage();

  if (saveState) {
    mainArea.innerHTML = ''; // Ghetto way of removing all projects with titles of 'undefined'
    krappieUI.renderPrevSession();
  } else {
    console.log('No previous session from localStorage found');
  }

// OPTION: Alternative to 'for...of' loop that may actually be correct. Not sure if it works with 'getFromStorage' though (works with array).Depends on whether or not localStorage.setItem saves the project/task as an array?

// appState.forEach(project => {
//   project.forEach(task => {
//     krappieUI.renderPrevSession();
//   }) 
// })
});

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

  // Attempt to get the search bar to pull up tasks as well. Throws a 'Task not found in the tasks array' error.

  // List of tasks
  // let taskList = document.querySelectorAll(".task-wrapper");

  // taskList.forEach(task => {
  //   let taskInfo = task.querySelector(".task-details");
  //   let taskName = taskInfo.firstChild.textContent;

  //   if (taskName.toLowerCase().indexOf(searchTextConvert) != -1) {
  //     task.style.display = 'block';
  //   } else {
  //     task.style.display = 'none';
  //   }
  // });
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

// Variable used for updating, deleting and toggling "complete" status of tasks in the UI and nested 'tasks' array in each project
let taskId;

// "Update Task" button functionality that brings up the Task form again to enter new details
mainArea.addEventListener('click', (e) => {
  if (e.target && e.target.closest(".update-task")) {
    const taskItem = e.target.closest(".task-wrapper");
    if (taskItem) {
      taskId = taskItem.getAttribute("data-key");
      krappieUI.taskUpdateDialog.showModal();

      // TODO: This is not populating any list of current projects - is it the function itself? (only populates on initial creation of task)
      krappieUI.populateProjects(); 
    } else {
      console.error('Task not found in the tasks array');
    }
  }
});

// "Update" button functionality that checks that all required sections were updated by the user, then submits the changes to the main area and closes the Update form
// TODO: Implement 'onchange' handler using the updatedDetails properties combined with saveToStorage (see example below)
// TODO: Need to figure out "Add to Project" logic - how are we going to get the code to remove the task from one project and add it to another if the user so chooses?
krappieUI.editTask.addEventListener('click', (e) => {
  let taskEdit = document.getElementById("task-update-form").checkValidity();
  if (taskEdit) {
    e.preventDefault();

    // Values of all updated form sections
    const updatedDetails = {
      taskTitle: document.getElementById("update-task-title").value.trim(),
      dueDate: document.getElementById("update-due-date").value,
      project: document.getElementById("update-add-to-project").value, // Take this out if we can't figure out "Add to Project" logic
      priority: document.getElementById("update-priority").value,
      description: document.getElementById("update-description").value
    };

    // TODO: Do we need a conditional that shows if the newProject does NOT match the name of the current project in the UI, update where the task is rendered?

    // const taskDates = document.querySelectorAll(".task-date");
    // const taskPriorities = document.querySelectorAll(".task-priority");
    // const taskDescriptions = document.querySelectorAll(".task-description");

    // Run the updateTask function
    updateTask(taskId, updatedDetails);

    // Example for updating localStorage on any task being updated in the form
    // updatedDetails.taskTitle.onchange = saveToStorage();
    // updatedDetails.dueDate.onchange = saveToStorage();
    // updatedDetails.project.onchange = saveToStorage();
    // updatedDetails.priority.onchange = saveToStorage();
    // updatedDetails.description.onchange = saveToStorage();

    // Function call that renders the update in the UI
    const taskDetails = document.querySelectorAll(".task-details");

    taskDetails.forEach(detail => {
      if (detail.getAttribute("data-key") === taskId) {
        const _title = detail.querySelector(".task-item-");
        const _dueDate = detail.querySelector(".task-date");
        const _priority = detail.querySelector(".task-priority");
        const _description = detail.querySelector(".task-description");

        _title.textContent = updatedDetails.taskTitle;
        _dueDate.textContent = updatedDetails.dueDate;
        _priority.textContent = updatedDetails.priority;
        _description.textContent = updatedDetails.description;
      }
    });

    taskUpdateForm.reset();
    krappieUI.taskUpdateDialog.close();
  }
});

// Task checkbox functionality. Detects the task being checked off as completed.
mainArea.addEventListener('click', (e) => {
  if (e.target && e.target.closest(".js-tick")) {
    const _taskItem = e.target.closest(".task-wrapper");
    const _taskDetails = _taskItem.querySelector(".task-details");
    taskId = _taskDetails.getAttribute("data-key");

    toggleTaskChecked(taskId);

    const checkbox = e.target;
    checkbox.checked = !checkbox.checked;

    if (checkbox.checked) {
      _taskDetails.style.textDecoration = "line-through";
      checkbox.textContent = '✓';
      checkbox.style.cssText = "color: white; background: green; font-size: 20px;";
    } else {
      _taskDetails.style.textDecoration = "none";
      checkbox.textContent = " ";
      checkbox.style.cssText = "none";
    }

    // Commented out this line as it could complicate other functionality that relies on targeting "task-details"
    // _taskDetails.classList.toggle("task-details-done");  
  }
});

// "Delete Task" button functionality that removes the task both from the nested tasks array inside the myProjects array and the UI
// TODO: Test out 'localStorage.removeItem()' below
mainArea.addEventListener('click', (e) => {
  if (e.target && e.target.closest(".delete-task")) {
    const taskItem = e.target.closest(".task-wrapper");
    taskId = taskItem.getAttribute("data-key");

    // Removes the task from the tasks array nested inside of the projects in appState
    removeTask(taskId);
    
    // Removes the task from the UI
    taskItem.remove();

    // Removes the task from localStorage? 'taskId' may be the wrong parameter (could also be 'projects' or something else)
    // localStorage.removeItem(taskId);
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
// TODO: Implement 'onchange' handler using either the projectEdit or newProjectName variable combined with saveToStorage (see example below)
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

    // Example for updating localStorage on any project being updated in the form
    // newProjectName.onchange = saveToStorage();

    projectUpdateForm.reset();
    krappieUI.projectUpdateDialog.close();
  }
});

// "Delete Project" button functionality that removes the project both from the myProjects array and the UI
// TODO: if remove button functionality for existing projects goes here, don't forget to add the myProjects.splice(-1, 1) method to it;
// TODO: Test out 'localStorage.removeItem()' below
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

    // Removes the project from localStorage? 'targetProject' may be the wrong parameter (could also be 'projects' or something else)
    // localStorage.removeItem(targetProject);
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
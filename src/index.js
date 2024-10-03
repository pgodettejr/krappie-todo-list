import * as krappieUI from './krappieUI.js';
import { appState } from './projects.js';
import { removeTask, updateTask, toggleTaskChecked, storeTask } from './tasks.js';
import { getFromStorage } from "./localStorage.js";
import './styles.css';
import reverbFart from './sounds/quick-fart-with-reverb.mp3';
import Plus from './img/plus.png';

// TODO: Hitting the "Enter" key on the keyboard doesn't submit & close any form it seems. Either fix here in all the button logic or in the HTML itself?

// OPTION: Could add 'document.addEventListener('DOMContentLoaded', () => { move EVERYTHING in here except imports });' to ensure they are attached correctly after DOM becomes available

// OPTION: Add the for loop 'for (let i = 0; i < 1_000_000_000; i++);' to delay DOM parsing, forcing this to launch later
// OPTION: Could also add a condition 'if (document.readyState === "loading") { code below goes here } else { console.info("DOM already") }
document.addEventListener('DOMContentLoaded', () => {
  const saveState = getFromStorage();

  if (!saveState) {
    appState.myProjects.push(appState.defaultProject);
    krappieUI.renderDefault(); 
  } else {
    krappieUI.renderPrevSession();
  }
});

// Main area DOM
const mainArea = document.querySelector("main");

// Forms DOM
const taskForm = document.getElementById("task-form");
const projectForm = document.getElementById("project-form");
const taskUpdateForm = document.getElementById("task-update-form");
const projectUpdateForm = document.getElementById("project-update-form");

// Sidebar DOM
const projectMenu = document.querySelector(".menu-2");
const sidebarTaskBtn = document.getElementById("add-task-2");
const sidebarProjectBtn = document.getElementById("add-project");

// Icon for Add Task button in the header
const headerTask = document.getElementById("add-task");

const taskIcon = new Image();
taskIcon.src = Plus;
taskIcon.classList.add("image-button");

headerTask.appendChild(taskIcon);

// Secret easter egg. Click is enabled, but how can we also enable other interactions for accessibility like 'keydown', etc.?
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

  // Attempt to get the search bar to search by tasks as well. Throws a 'Task not found in the tasks array' error.

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
  }
});

// "Delete Task" button functionality that removes the task both from the nested tasks array inside the myProjects array and the UI
mainArea.addEventListener('click', (e) => {
  if (e.target && e.target.closest(".delete-task")) {
    const taskItem = e.target.closest(".task-wrapper");
    taskId = taskItem.getAttribute("data-key");

    // Removes the task from the tasks array nested inside of the projects in appState
    removeTask(taskId);
    
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

    let newProjectName = document.getElementById("project-update-title").value.trim();
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
mainArea.addEventListener('click', (e) => {
  if (e.target && e.target.closest(".delete-project")) {
    // OPTION: e.preventDefault() on this line here potentially to stop form submission to the backend of the browser?
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
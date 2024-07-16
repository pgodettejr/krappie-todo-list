// TODO: Don't forget to create a container element in the DOM for everything to generate under, then return that container element at the bottom of this file
// TODO: Setting up localStorage functions may make the whole rendering process easier as far as what projects/tasks to get when a user clicks on one
// TODO: Try to place all project buttons rendered under the Project Title <p> element as children (so button placement looks better in the UI)

import { appState } from './projects.js';
// import { tasks } from './tasks.js';
import { createTask } from './tasks.js';
import Update from './img/update.png';
import Delete from './img/trash-bin.png';

// DOM elements related to adding and updating projects and tasks to the app
const projectDialog = document.getElementById("project-dialog");
const projectUpdateDialog = document.getElementById("project-update-dialog");
const confirmProject = document.getElementById("confirmProject");
const cancelProject = document.getElementById("cancelProject");
const editProject = document.getElementById("updateProject");

const taskDialog = document.getElementById("task-dialog");
const taskUpdateDialog = document.getElementById("task-update-dialog");
const confirmTask = document.getElementById("confirmTask");
const cancelTask = document.getElementById("cancelTask");
const editTask = document.getElementById("updateTask");

// Renders the default project named "Today" for daily projects & tasks on page load
function renderDefault() {

  // OPTION: This could potentially work as well
  // let todayProject = appState.defaultProject; - use this as a parameter for this function as well
  // appState.myProjects.push(todayProject);

  // if (todayProject) {
  for (const project in appState.myProjects) {
    // DOM for "My Projects" section of the sidebar as well as the main area
    const projectSidebar = document.querySelector(".menu-2");
    const main = document.querySelector("main");

    // Generate the sidebar button
    const projectBtn = document.createElement("button");
    let projectBtnText = document.createTextNode(`${appState.myProjects[project].projectTitle}`);
    projectBtn.classList.add("project-btn");
    projectBtn.setAttribute("data-project-title", `${appState.myProjects[project].projectTitle}`); // TODO: Check this & make sure the attribute is set correctly

    // Generate "Project" wrapper/container to be added to the main area
    const projectWrapper = document.createElement("div");
    projectWrapper.classList.add("project-wrapper");

    // Generate "Project Name" header to be added to the project container
    const projectName = document.createElement("p");
    projectName.classList.add("project-name");
    projectName.innerText = appState.myProjects[project].projectTitle;

    // Render "Update" icon button to be added to "Project Name" header
    // TODO: May not allow the Project title itself to be updated by commenting this section out (do this later on after we finish using the default Project for testing)
    const updateBtn = document.createElement("button");
    updateBtn.classList.add("update-project");

    const updateIcon = new Image();
    updateIcon.src = Update;
    updateIcon.classList.add("image-button");

    // Render "Delete" icon button to be added to "Project Name" header
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-project");

    const deleteIcon = new Image();
    deleteIcon.src = Delete;
    deleteIcon.classList.add("image-button");

    // Append everything where it needs to be
    projectBtn.appendChild(projectBtnText);
    projectSidebar.appendChild(projectBtn);

    updateBtn.appendChild(updateIcon);
    deleteBtn.appendChild(deleteIcon);
    projectWrapper.appendChild(projectName);
    projectWrapper.appendChild(updateBtn);
    projectWrapper.appendChild(deleteBtn);

    main.appendChild(projectWrapper);
  }
}

// Renders all projects that are created via the "Add Project" form
function renderProject() {
  let formTitle = document.getElementById("project-title").value.trim(); // Remove '.trim()' later on if it causes errors (added to address any whitespace)

  if (formTitle) { 
    // DOM for "My Projects" section of the sidebar as well as the main area
    const projectSidebar = document.querySelector(".menu-2");
    const main = document.querySelector("main");

    // Generate the sidebar button
    const projectBtn = document.createElement("button");
    let projectBtnText = document.createTextNode(`${formTitle}`);
    projectBtn.classList.add("project-btn");
    projectBtn.setAttribute("data-project-title", formTitle);

    // Generate "Project" wrapper/container to be added to the main area
    const projectWrapper = document.createElement("div");
    projectWrapper.classList.add("project-wrapper");

    // Generate "Project Name" header to be added to the project container
    const projectName = document.createElement("p");
    projectName.classList.add("project-name");
    projectName.innerText = formTitle;

    // Render "Update" icon button to be added to "Project Name" header
    const updateBtn = document.createElement("button");
    updateBtn.classList.add("update-project");

    const updateIcon = new Image();
    updateIcon.src = Update;
    updateIcon.classList.add("image-button");

    // Render "Delete" icon button to be added to "Project Name" header
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-project");

    const deleteIcon = new Image();
    deleteIcon.src = Delete;
    deleteIcon.classList.add("image-button");
    
    // Append everything where it needs to be
    projectBtn.appendChild(projectBtnText);
    projectSidebar.appendChild(projectBtn);

    updateBtn.appendChild(updateIcon);
    deleteBtn.appendChild(deleteIcon);
    projectWrapper.appendChild(projectName);
    projectWrapper.appendChild(updateBtn);
    projectWrapper.appendChild(deleteBtn);

    main.appendChild(projectWrapper);

    // When here under renderProject():

    // This function will only replace the current project showing in main area once. Will not show another project afterwards if you click it's related sidebar button
    // No matter what button is clicked, all previous <ul> are removed and only the last <ul> shows, even if it's not related to the button clicked.
    // Keep in mind the <ul> remains when renderProject is run, but the project related to it inside the array is deleted due to splice

    // When placed in index.js by itself, the buttons do nothing on click

    // TODO: We need to figure out how to separate this code somehow. renderProject() is doing too much as it is
    const projectButtons = document.querySelectorAll(".project-btn");

    projectButtons.forEach(projectBtn => {
      projectBtn.addEventListener('click', () => { // Took the "e" out of the parentheses. Will put it back in if needed later on.
        // TODO: Code to generate the project related to the button clicked via "tabbed browsing" goes here. See example code in comments below.
        // Goal is to render the page elements of the corresponding button WITHOUT recreating the button again

        // TODO: Debug and step through this function and find out exactly what is happening when previously generated buttons are clicked (none of the buttons disappear)
        // NOTE: Do we need to write code that says if the value of the ul is equal to the value of the button, then replace any current content and append the ul of that button
        main.replaceChildren();

        // OPTION: Try "renderProject(project name selected via button);" instead
        main.appendChild(projectWrapper); // currentProject argument gives Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.

        // Previous version that tried to run the code only if the text from the button and the ul matched up

        // const currentProject = document.querySelector(".project-name");

        // if (button.textContent === currentProject.textContent) {
        //   main.replaceChildren(); 
        //   main.appendChild(currentProject);
        // }
      });
    });
  }
}

// Function for rendering all Project options to the "Add to Project" drop-down menu in the Task form
function populateProjects() {
  for (const project in appState.myProjects) {
    const projectSelect = document.getElementById("add-to-project");

    const projectOption = document.createElement("option");
    let projectOptionText = document.createTextNode(`${appState.myProjects[project].projectTitle}`);

    if (appState.myProjects[project].projectTitle === "Today") {
      projectOption.setAttribute('selected', true);
    }

    projectOption.appendChild(projectOptionText);
    projectSelect.appendChild(projectOption);
  }
}

// Function for dynamically adding the task to the target project in the <main> area
// TODO: Need to render an Update button, a Delete button and a checkbox (see 'isChecked' variable below for the checkbox)
function renderTask() {
  let formTaskTitle = document.getElementById("task-title").value.trim(); // Remove '.trim()' later on if it causes errors (added to address any whitespace)
  let formDueDate = document.getElementById("due-date").value;
  let formProject = document.getElementById("add-to-project").value;
  let formPriority = document.getElementById("priority").value;
  let formDescription = document.getElementById("description").value;

  if (formTaskTitle && formDueDate && formProject && formPriority) { // Previous code: for (const task in tasks) (const task in appState.myProjects.tasks)
    // Should the actual rendering of the <ul> be handled by index.js? (have this function run in index.js, then append everything to the project <ul> afterwards in index.js)
    // const taskList = document.createElement("ul");
    // taskList.classList.add("task-info");

    // Checkbox rendering goes here or under taskName
    // TODO: Change this to createTask.checked and see if that will show the "checked" status on render? (currently doesn't show "checked" status at all)
    // Should read the status of 'checked' in the array. If yes, render empty checkbox. If no, render checked checkbox (either here or somewhere else in the code)
    const isChecked = createTask.checked ? 'done' : '';

    // Function and DOM for finding the correct (previously rendered) project to render the task to then declaring it afterwards

    // OPTION 1: change the <p> element holding the project title text to a <ul>, then target the <ul> here that has the same text matching the value of formProject above
    // OPTION 2: Leave it as a <p> element and just target it here the same way as Option #1 (render a new empty ul with li's under it or change all tasks to <p> and render those)
    // OPTION 3: Make a brand new empty <ul> with a class in renderProject, then target it here (but how would we know which empty <ul> to add the task to?)
    // OPTION 4: Try to utilize 'appState.findProject(formProject)' somehow - have this variable equal that and then try to find the matching <p> element with other code
    // This would involve adding a forEach method similar to what we have now and that method would still have to be inside a function to work most likely

    function addToProjectUI (text) {
      const projectHeaders = document.querySelectorAll(".project-name");
      for (const projectHeader of projectHeaders) {
        if (projectHeader.textContent.trim() === text) {
          return projectHeader;
        }
      }

      return null;
    }

    const projectNameHeader = addToProjectUI(formProject);

    // Sets up the name of the task entered (as a list element so the user can have a list of tasks?)
    // OPTION: Change this back to "li" if we change the "p" element for the project title to a "ul" instead (see 'taskList' code at the very top of this if statement we're in)
    const taskName = document.createElement("p");
    // taskName.setAttribute('data-key', task.id); - Don't think I need this. UI should have nothing to do with rendering any task/project's ID number on screen
    taskName.classList.add(`task-item-${isChecked}`);

    // Renders <p> tags for the Date, Priority level and Description box from the "Add Task" form (to be used as parents for the text info below)
    const taskDate = document.createElement("p");
    const taskPriority = document.createElement("p");

    taskDate.classList.add("task-date");
    taskPriority.classList.add("task-priority");
    
    // Text info DOM that takes user input from the "Add Task" form and creates text nodes to be attached to the <p> tags above
    const taskNameInfo = document.createTextNode(`${formTaskTitle}`);
    const taskDateInfo = document.createTextNode(`${formDueDate}`);
    const taskPriorityInfo = document.createTextNode(`${formPriority}`);

    // Render "Update" icon button to be added to "Task Name" header
    const updateTaskBtn = document.createElement("button");
    updateTaskBtn.classList.add("update-task");

    const updateTaskIcon = new Image();
    updateTaskIcon.src = Update;
    updateTaskIcon.classList.add("image-button");

    // Render "Delete" icon button to be added to "Task Name" header
    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.classList.add("delete-task");

    const deleteTaskIcon = new Image();
    deleteTaskIcon.src = Delete;
    deleteTaskIcon.classList.add("image-button");

    // Attaches button icon images to the buttons themselves
    updateTaskBtn.appendChild(updateTaskIcon);
    deleteTaskBtn.appendChild(deleteTaskIcon);

    // Attaches text info via user input to the <p> tags that were created
    taskName.appendChild(taskNameInfo);
    taskDate.appendChild(taskDateInfo);
    taskPriority.appendChild(taskPriorityInfo);

    // Places the "Update" and "Delete" buttons under the Task Name <p>
    taskName.appendChild(updateTaskBtn);
    taskName.appendChild(deleteTaskBtn);

    // Places the Date, Time, Priority level and Description as children under the Task Name <p>
    // TODO: This looks ok in the UI, but we want a different implementation to make it better if possible (may need to do this with CSS)
    taskName.appendChild(taskDate);
    taskName.appendChild(taskPriority);

    // Render necessary elements from Description box to be added as text under the task Title if filled out by the user
    if (formDescription) {
      const taskDescription = document.createElement("p");
      taskDescription.classList.add("task-description");

      const taskDescriptionInfo = document.createTextNode(`${formDescription}`);

      taskDescription.appendChild(taskDescriptionInfo);
      taskName.appendChild(taskDescription);
    }

    // Places the task itself (via it's name) as a child under the Project <ul>
    projectNameHeader.appendChild(taskName);
  }
}

// Example of navigation bar button functionality in the Restaurant project that switches pages via tabbed browsing

// const navButtons = document.querySelectorAll('.nav-button');

// navButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     let currentButton = document.querySelector('button[aria-current]');

//     switch (button.textContent) {
//       case 'Menu':
//         currentButton.removeAttribute('aria-current');
//         button.setAttribute('aria-current', 'page');
//         content.replaceChildren();
//         content.appendChild(menupage());
//         break;

//       case 'Home':
//         currentButton.removeAttribute('aria-current');
//         button.setAttribute('aria-current', 'page');
//         content.replaceChildren();
//         content.appendChild(homepage());
//         break;

//       case 'Contact':
//         currentButton.removeAttribute('aria-current');
//         button.setAttribute('aria-current', 'page');
//         content.replaceChildren();
//         content.appendChild(contactPage());
//         break;
//     }
//   })
// })

// Example from Tic Tac Toe game that places player marker in a given cell once clicked, then switches player turn. Use this to figure out what project button was clicked.
// cells.forEach((cell, index) => {
//   cell.addEventListener('click', () => {
//     const row = Math.floor(index / 3);
//     const col = index % 3;
//     Gameboard.makeMove(row, col, gameFlow.getCurrentPlayer().marker);
//     cell.textContent = gameFlow.getCurrentPlayer().marker; 
//     cell.setAttribute("disabled", "");

//     // Switches the player's turn on the condition that there is no game winner yet, then displays the current turn on the UI
//     if (!Gameboard.checkWin()) {
//       gameFlow.switchTurn();
//       console.log(`${gameFlow.getCurrentPlayer().name()}'s turn.`); 
//       info.replaceChildren();
//       info.textContent = `${gameFlow.getCurrentPlayer().name()}'s turn`;
//     } 
//   });
// });

export { projectDialog, projectUpdateDialog, confirmProject, cancelProject, editProject, renderDefault, renderProject, populateProjects, taskDialog, taskUpdateDialog, confirmTask, cancelTask, editTask, renderTask }

// Old code showing several attempts to get the renderProject function to stop duplicating previously created projects when new ones were rendered

// This conditional doesn't change anything (still duplicates previous projects) & doesn't add default project on page load at all
// if (project !== appState.myProjects[project].projectTitle) {
//   continue;
// }

// These solutions also don't work. Default project no longer shows up on page load.

// let projectTitle = document.getElementById("project-title").value;
// const availableProjects = appState.myProjects.filter(project => project.projectTitle === projectTitle).map(project => project.projectTitle)
// if (!availableProjects.length) return;

// let projectTitle = document.getElementById("project-title").value;
// if (projectTitle) { code below goes inside these brackets }

// [project] below is not defined. When I removed it, the entire app freezes after hitting "Confirm" when creating a project
// let latestProject = appState.myProjects.length - 1;
// while (latestProject)

// When confirming the project to be created, the form closes as if the project was successfully created but it never renders. Only gets added to the myProjects array.
// for (let i = appState.myProjects.length - 1; i < appState.myProjects.length - 1; i--)

// Having no loop at all and just adding 'project' as a parameter to the renderProject function itself (sidebar buttons also no longer work)

// Only other solution to keep this loop would be to implement some way to 'find' the project that was entered from 'appState.addProject' and only render that one
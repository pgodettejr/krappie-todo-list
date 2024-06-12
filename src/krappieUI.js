// TODO: Don't forget to create a container element in the DOM for everything to generate under, then return that container element at the bottom of this file

// TODO: We either need a function to switch from one project to another (similar to Restaurant page) or let user see all projects but only <main> scrolls down in the CSS
// Look at Alex Younger's ScreenController function from his Connect 4 article as a template for how to switch from one project to another (using function that 'get' them)
// updateScreen() in particular

// TODO: Setting up localStorage functions may make the whole rendering process easier as far as what projects/tasks to get when a user clicks on one

import { appState } from './projects.js';

// Global DOM elements related to adding projects and tasks to the app
const projectForm = document.getElementById("project-dialog");
const confirmProject = document.getElementById("confirmProject");
const cancelProject = document.getElementById("cancelProject");
const taskForm = document.getElementById("task-dialog");
const confirmTask = document.getElementById("confirmTask");
const cancelTask = document.getElementById("cancelTask");

// Generate all project info here using the "DOM level 1" technique (see "Traversing an HTML table with JS & DOM interfaces" documentation if needed)
// e.g: bookDisplay() function in the Library project
// TODO: Currently adds all projects in the array like before (duplicates) now that splice is removed
function renderProject() {
  for (const project in appState.myProjects) {
    // This conditional doesn't change anything (still duplicates previous projects) & doesn't add default project on page load at all
    // if (project !== appState.myProjects[project].projectTitle) {
    //   continue;
    // }


    // Possible solution to keep the 'for...in' loop but stop duplicate projects from being rendered (Alex Younger Connect 4 solution)
    // const availableProjects = appState.myProjects.filter(project => project.projectTitle === projectTitle).map(project => project.projectTitle)

    // if (!availableProjects.length) return;


    // Another possible solution to keep the 'for...in' loop (copy paste what I had in addProject method for appState)
    // let projectTitle = document.getElementById("project-title").value;
    // if (projectTitle) { code below goes inside these brackets }


    // Only other solution to keep this loop would be to implement some way to 'find' the project that was entered from 'appState.addProject' and only render that one


    // DOM for "My Projects" section of the sidebar as well as the main area
    const projectSidebar = document.querySelector(".menu-2");
    const main = document.querySelector("main");

    // Generate the sidebar button
    const projectBtn = document.createElement("button");
    let projectBtnText = document.createTextNode(`${appState.myProjects[project].projectTitle}`);
    projectBtn.classList.add("project-btn");

    // Function to remove all currently showing content in main when a Project button is clicked. 
    // Just goes back to adding all projects in the array like before (duplicates) if splice is removed
    // projectBtn.addEventListener('click', () => {
    //   main.replaceChildren(projectName);
    // });

    // Generate "Project Name" header to be added to the main area
    const projectName = document.createElement("ul");
    let projectNameText = document.createTextNode(`${appState.myProjects[project].projectTitle}`);
    projectName.classList.add("project-name");

    projectBtn.appendChild(projectBtnText);
    projectSidebar.appendChild(projectBtn);
    projectName.appendChild(projectNameText);
    main.appendChild(projectName);

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

        // TODO: Debug and step through this function and find out exactly what is happening when previously generated buttons are clicked
        // NOTE: Do we need to write code that says if the value of the ul is equal to the value of the button, then replace any current content and append the ul of that button
        main.replaceChildren();
        main.appendChild(projectName); // currentProject argument gives Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.

        // Previous version that tried to run the code only if the text from the button and the ul matched up

        // const currentProject = document.querySelector(".project-name");

        // if (button.textContent === currentProject.textContent) {
        //   main.replaceChildren(); 
        //   main.appendChild(currentProject);
        // }
      });
    });
  }

  // Reinstate this if we can't figure out how to stop duplicates
  // We could use the splice method in our function that deletes projects (which isn't written yet) - appState.myProjects.splice(projectIndex, 1);
  // appState.myProjects.splice(-1, 1);
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

// Function for dynamically adding the task to the <main> area
// May need to completely redo this function. The "Library project" DOM level 1 technique might not work for this one (task is an array within an object within another array)
function renderTask() {
  for (const task in appState.myProjects) {
    // Should the actual rendering of the <ul> be handled by index.js? (have this function run in index.js, then append everything to the project <ul> afterwards in index.js)
    // const taskList = document.createElement("ul");
    // taskList.classList.add("task-info");

    // Checkbox rendering goes here or under taskName
    // TODO: Change this to createTask.checked and see if that will show the "checked" status on render? (currently doesn't show "checked" status at all)
    const isChecked = task.checked ? 'done' : '';

    // DOM for existing "Project Name" header (that was previously rendered)
    const projectName = document.querySelector("ul");

    // Sets up the name of the task entered as a list element so the user can have a list of tasks
    // TODO: "data-key" is showing as undefined, likely due to 'task.id' being incorrect in showing the ID number for the task created
    const taskName = document.createElement("li");
    taskName.setAttribute('data-key', task.id);
    taskName.classList.add(`todo-item-${isChecked}`);

    // Renders <p> tags for the Date, Priority level and Description box from the "Add Task" form (to be used as parents for the text info below)
    const taskDate = document.createElement("p");
    const taskPriority = document.createElement("p");
    const taskDescription = document.createElement("p");

    taskDate.classList.add("task-date");
    taskPriority.classList.add("task-priority");
    taskDescription.classList.add("task-description");

    // Text info DOM that takes user input from the "Add Task" form and creates text nodes to be attached to the <p> tags above
    // TODO: ALL of these are showing as "undefined" in the UI and DevTools (elements themselves are rendering correctly)
    const taskNameInfo = document.createTextNode(`${appState.myProjects[task].taskTitle}`);
    const taskDateInfo = document.createTextNode(`${appState.myProjects[task].dueDate}`);
    const taskPriorityInfo = document.createTextNode(`${appState.myProjects[task].priority}`);
    const taskDescriptionInfo = document.createTextNode(`${appState.myProjects[task].description}`);

    // Attaches text info via user input to the <p> tags that were created
    taskName.appendChild(taskNameInfo);
    taskDate.appendChild(taskDateInfo);
    taskPriority.appendChild(taskPriorityInfo);
    taskDescription.appendChild(taskDescriptionInfo);

    // Places the Date, Time, Priority level and Description as children under the Task Name <li>
    // TODO: Test to see if this looks ok in the UI. Think of a different implementation if it doesn't
    taskName.appendChild(taskDate);
    taskName.appendChild(taskPriority);
    taskName.appendChild(taskDescription);

    // Places the task itself (via it's name) as a child under the Project <ul>
    // TODO: It works currently. It's just showing undefined on everything is all (not due to this code itself)
    projectName.appendChild(taskName);

    // TODO: Code for a conditional statement that checks to see if the project the user selected exists before adding the task to it (if else statement)
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

export { projectForm, confirmProject, cancelProject, renderProject, populateProjects, taskForm, confirmTask, cancelTask, renderTask }
// TODO: Don't forget to create a container element in the DOM for everything to generate under, then return that container element at the bottom of this file

import { myProjects } from './projects.js';

// Global DOM elements related to adding projects and tasks to the app
const projectForm = document.getElementById("project-dialog");
const confirmProject = document.getElementById("confirmProject");
const cancelProject = document.getElementById("cancelProject");
const taskForm = document.getElementById("task-dialog");
const confirmTask = document.getElementById("confirmTask");
const cancelTask = document.getElementById("cancelTask");

// class Project {
//   constructor(projectTitle) {
//     this.projectTitle = projectTitle;
//   }
// }

// function addProject() {
//   let projectTitle = document.getElementById("project-title").value; // Potentially add '.trim()' to the end of this line if there's whitespace that needs to be removed

//   if (projectTitle) {
//     const newProject = new Project(projectTitle);

//     // As this line of code is currently, we get "Uncaught ReferenceError: arr is not defined"
//     // if 'let' is added before 'arr' we get "Uncaught ReferenceError: Cannot access 'arr' before initialization"
//     arr = (arr || [] ).concat(newProject) // Does "newProject" need to be enclosed in [] to prevent the values which are arrays from being flattened?

//     projectDisplay(); // Function for dynamically adding the project to the Sidebar and main areas
//   }
// }

// Generate all project info here using the "DOM level 1" technique (see "Traversing an HTML table with JS & DOM interfaces" documentation if needed)
// e.g: bookDisplay() function in the Library project
// TODO: Change the name of this function
function renderProject() {
  for (const project in myProjects) {
    // DOM for "My Projects" section of the sidebar as well as the main area
    const projectSidebar = document.querySelector(".menu-2");
    const main = document.querySelector("main");

    // Generate the sidebar button
    const projectBtn = document.createElement("button");
    let projectBtnText = document.createTextNode(`${myProjects[project].projectTitle}`);
    projectBtn.classList.add("project-btn");

    // Function to remove all currently showing content in main when a Project button is clicked. 
    // Just goes back to adding all projects in the array like before (duplicates) if splice is removed
    // projectBtn.addEventListener('click', () => {
    //   main.replaceChildren(projectName);
    // });

    // Generate "Project Name" header to be added to the main area
    const projectName = document.createElement("ul");
    let projectNameText = document.createTextNode(`${myProjects[project].projectTitle}`);
    projectName.classList.add("project-name");

    projectBtn.appendChild(projectBtnText);
    projectSidebar.appendChild(projectBtn);
    projectName.appendChild(projectNameText);
    main.appendChild(projectName);

    // When here under projectDisplay():

    // This function will only replace the current project showing in main area once. Will not show another project afterwards if you click it's related sidebar button
    // No matter what button is clicked, all previous <ul> are removed and only the last <ul> shows, even if it's not related to the button clicked.
    // Keep in mind the <ul> remains when projectDisplay is run, but the project related to it inside the array is deleted due to splice

    // When placed in index.js by itself, the buttons do nothing on click

    // TODO: We need to figure out how to separate this code somehow. projectDisplay() is doing too much as it is
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

  myProjects.splice(-1, 1)
}

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
function renderTask() {
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

export { projectForm, confirmProject, cancelProject, renderProject, taskForm, confirmTask, cancelTask, renderTask }
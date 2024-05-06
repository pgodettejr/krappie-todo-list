// TODO: Don't forget to create a container element in the DOM for everything to generate under, then return that container element at the bottom of this file

import { myProjects } from './index.js';

// Global DOM elements related to adding projects and tasks to the app
const projectForm = document.getElementById("project-dialog");
const confirmProject = document.getElementById("confirmProject");
const cancelProject = document.getElementById("cancelProject");

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
function projectDisplay() {
  for (const project in myProjects) {
    // DOM for "My Projects" section of the sidebar as well as the main area
    const projectSidebar = document.querySelector(".menu-2");
    const main = document.querySelector("main");

    // Generate the sidebar button
    const projectBtn = document.createElement("button");
    let projectBtnText = document.createTextNode(`${myProjects[project].projectTitle}`);
    projectBtn.classList.add("project-btn");

    // Generate "Project Name" header to be added to the main area
    const projectName = document.createElement("ul");
    let projectNameText = document.createTextNode(`${myProjects[project].projectTitle}`);
    projectName.classList.add("project-name");

    projectBtn.appendChild(projectBtnText);
    projectSidebar.appendChild(projectBtn);
    projectName.appendChild(projectNameText);
    main.appendChild(projectName);
  }

  myProjects.splice(-1, 1)
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

export { projectForm, confirmProject, cancelProject, projectDisplay }
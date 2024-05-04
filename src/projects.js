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

    // Project button functionality. Could this be placed outside of this function? What about removing it from this JS entirely and placing it in index.js?
    const projectButtons = document.querySelectorAll(".project-btn");

    // Currently this will only replace the current project showing in main area once. Will not show another project afterwards if you click it's related sidebar button
    projectButtons.forEach(projectBtn => {
      projectBtn.addEventListener('click', () => { // Took the "e" out of the parentheses. Will put it back in if needed later on.
        // TODO: Code to generate the project related to the button clicked via "tabbed browsing" goes here. See example code in comments below.
        main.replaceChildren();
        main.appendChild(projectName);
      });
    });
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

export { projectForm, confirmProject, cancelProject, projectDisplay }
// TODO: Don't forget to create a container element in the DOM for everything to generate under, then return that container element at the bottom of this file

// Global DOM elements related to adding projects and tasks to the app
const projectForm = document.getElementById("project-dialog");
const confirmProject = document.getElementById("confirmProject");
const cancelProject = document.getElementById("cancelProject");

// TODO: Have the form create an array (ideally the name of the array is = user input). Not sure if the logic will go here or in index.js (either a function, button logic or both)

// Class for making "Project" objects(?) to be created as an array or a project inside of an array
class Project {
  constructor(projectTitle) {
    this.projectTitle = projectTitle;
  }
}

// Stores new Tasks objects into a new array via user input
// OPTION: Add "Priority Level" drop-down menu and "Description" text box. Would also need to add them to the Class above. Need to be rendered as well.
function addProject() {
  let projectTitle = document.getElementById("project-title").value; // Potentially add '.trim()' to the end of this line if there's whitespace that needs to be removed

  if (projectTitle) {
    const newProject = new Project(projectTitle);

    // As this line of code is currently, we get "Uncaught ReferenceError: arr is not defined"
    // if 'let' is added before 'arr' we get "Uncaught ReferenceError: Cannot access 'arr' before initialization"
    arr = (arr || [] ).concat(newProject) // Does "newProject" need to be enclosed in [] to prevent the values which are arrays from being flattened?

    projectDisplay(); // Function for dynamically adding the project to the Sidebar and main areas
  }
}

// Generate all project info here using the "DOM level 1" technique (see "Traversing an HTML table with JS & DOM interfaces" documentation if needed)
// e.g: bookDisplay() function in the Library project
function projectDisplay() {
  for (const project in arr) {
    // DOM for "My Projects" section of the sidebar as well as the main area
    const projectSidebar = document.querySelector("menu-2");
    const main = document.querySelector("main");

    // Generate the sidebar button
    const projectBtn = document.createElement("button");
    let projectBtnText = document.createTextNode(`${arr[project].projectTitle}`);
    projectBtn.classList.add(`${arr[project].projectTitle}`);

    projectBtn.appendChild(projectBtnText);
    projectSidebar.appendChild(projectBtn);

    // "Project Name" header to be added to the main area
    const projectName = document.createElement("ul");
    let projectNameText = document.createTextNode(`${arr[project].projectTitle}`);
    projectName.classList.add(`${arr[project].projectTitle}`);

    projectName.appendChild(projectNameText);
    main.appendChild(projectName);

    // Project button functionality. Could this be placed outside of this function? What about removing it from this JS entirely and placing it in index.js?
    const projectButtons = querySelectorAll("button[class=`${arr[project].projectTitle}`]"); // We might not need the 'class=' part

    projectButtons.forEach(projectBtn => {
      projectBtn.addEventListener('click', () => { // Took the "e" out of the parentheses. Will put it back in if needed later on.
        // TODO: Code to generate the project related to the button clicked via "tabbed browsing" goes here. See "Restaurant" project as an example
        main.replaceChildren();
        main.appendChild(`${arr[project].projectTitle}`);
      });
    });
  }
}

export { projectForm, confirmProject, cancelProject, Project, addProject, projectDisplay }
// TODO: Don't forget to create a container element in the DOM for everything to generate under, then return that container element at the bottom of this file

// Global DOM elements related to adding projects and tasks to the app
const projectForm = document.getElementById("project-dialog");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");

// TODO: Have the form create an array (ideally the name of the array is = user input). Not sure if the logic will go here or in index.js (either a function, button logic or both)

// Class for making "Project" objects(?) to be created as an array or a project inside of an array
class Project {
  constructor(projectTitle) {
    this.projectTitle = projectTitle;
  }
}

// Stores new Tasks objects into a new array via user input
// OPTION: Add "Priority Level" drop-down menu and "Description" text box. Would also need to add them to the Class above.
function addProject() {
  let projectTitle = document.getElementById("project-title").value;

  if (projectTitle) {
    const newProject = new Project(projectTitle);
    // TODO: Logic for creating a new array/object based on user input goes here
    newProject.push()
  }
}

export { projectForm, confirmBtn, cancelBtn, Project, addProject }
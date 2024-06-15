// TODO: Try to switch everything that fetches a project via its title to fetching it via its ID

import * as krappieUI from "./krappieUI.js"; // Change this back to importing each export separately?
import { createTask, removeTask, updateTask, toggleTaskChecked, storeTask } from "./tasks.js";

// Creates "project" objects to be added to the "myProjects" array
function createProject (projectTitle) {
  const tasks = []; // Initializes tasks as an empty array
  let checked = false; // Checkbox whose default is not checked. Does NOT currently add the "checkbox" itself to the task (see HTML file for details). May need to be a method.

  // ID number for each project assigned at "random?" used to find the task that the user clicked on to modify or delete. Symbol("UID") could work as well?
  let id = Date.now().toString(); 

  // Logic to allow projects with duplicate names to be added, but with a 1 next to the name. May need to go under addProject in appState instead, since project isn't read here.
  // let projects = appStatus.myProjects;

  // if (projects.find((project) => project.projectTitle === projectTitle)) {
  //   const project = appState.myProjects(projectTitle + "1");
  // } else {
  //   const project = appState.myProjects(projectTitle);
  // }

  // TODO: This likely needs to find the right project to add the tasks array to? Link this up with the findProject method in the appState below
  // function addTask(taskTitle, dueDate, priority, description) {
  //   const newTask = createTask(taskTitle, dueDate, priority, description);
  //   tasks.push(newTask);
  // }

  return { projectTitle, tasks, checked, id }
}

const appState = {
  myProjects: [], // List of projects and tasks within those projects
  defaultProject: createProject("Today"),

  // Stores the "project" object to the myProjects array, then runs the project rendering function to display it on the UI
  // OPTION: Add "Priority Level" drop-down menu and "Description" text box. Need to be rendered as well in UI file.
  storeProject: function () {
    let projectTitle = document.getElementById("project-title").value; // Potentially add '.trim()' to the end of this line if there's whitespace that needs to be removed

    if (projectTitle) {
      const newProject = createProject(projectTitle); 
      
      this.myProjects.push(newProject);
      // This might not have to be here. Could maybe just run this under the button logic itself.
      krappieUI.renderProject(); // Remove the dot notation if changes on line 1 are made
    }
  },

  // Finds (reads?) a project
  // TODO: This still might not work. Shows "(parameter) project: never". May need to rename "project" to something else in the find method.
  readProject: function (projectTitle) { 
    return this.myProjects.find(project => project.projectTitle === projectTitle); 
  },

  // Finds and updates the name of an existing Project in the myProjects array. Placeholder for now.
  updateProject: function (projectTitle, updates) {
    this.readProject();
    Object.assign(projectTitle, updates);
  },

  // Deletes a project
  // TODO: This may or may not work. If it works, it should delete the project from the array then re-render the main area. This is more of a placeholder than anything.
  deleteProject: function (projectIndex) { // May not need a parameter at all
    this.myProjects.splice(projectIndex, 1);
    krappieUI.renderProject();
  },

  // Toggles "complete" status of a project
  toggleProjectChecked: function () {
    this.readProject();
    project.checked = !project.checked
  }
};

export { createProject, appState }

// Old code for storing new "Project" objects into a new array via user input. In case of emergency, use this.
// function storeProject() {
//   let projectTitle = document.getElementById("project-title").value; // Potentially add '.trim()' to the end of this line if there's whitespace that needs to be removed

//   if (projectTitle) {
//     const newProject = new Project(projectTitle);
//     myProjects.push(newProject);
//     renderProject();
//   }
// }

// Old code for toggling "complete" status of a given project. Use this if the method inside of appStatus object doesn't work.
// function toggleProjectChecked (projectTitle) {
//   let projects = appState.myProjects;
//   const projectStatus = projects.find(project => project.projectTitle === projectTitle)

//   if (projectStatus) {
//     projectStatus.checked = !projectStatus.checked;
//   }
// }
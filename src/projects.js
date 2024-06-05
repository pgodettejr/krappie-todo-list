import { renderProject } from "./krappieUI.js";


// List of projects and tasks within those projects
const myProjects = [];

// Creates "project" objects to be added to the "myProjects" array
function createProject (projectTitle) {
  const tasks = []; // Initializes tasks as an empty array
  // const taskId = createTask.id; // Change this to appState.
  // const taskCheck = createTask.checked;

  function addTask(taskTitle, dueDate, priority, description) {
    const newTask = createTask(taskTitle, dueDate, priority, description);
    tasks.push(newTask);
  }

  return { projectTitle, tasks, addTask }
}

// TODO: Try to refactor this into a factory function in the future? Rename it to appStatus?
const appState = {
  myProjects: [],
  defaultProject: createProject("Today"), // TODO: This project should automatically render on page open (likely have to do that in krappieUI and export to index)
  // OPTION: Add "Priority Level" drop-down menu and "Description" text box. Need to be rendered as well in UI file.
  addProject: function (projectTitle) {
    
    // TODO: Should "createProject" have no parameter at all?
    const newProject = createProject(projectTitle); 
    
    this.myProjects.push(newProject);
    renderProject();
  },
  findProject: function (projectTitle) {
    return this.myProjects.find(myProject => myProject.projectTitle === projectTitle); // TODO: This still might not work. Shows "(parameter) myProject: never"
  }
};

// Code to test functions

// TODO: Make sure we call this on page load in index.js (put it at the top after imports). Add UI render elements as needed.
// appState.myProjects.push(appState.defaultProject);

// let project1 = appState.findProject("Default");

export { myProjects, createProject, appState }

// Old code for storing new "Project" objects into a new array via user input
// function storeProject() {
//   let projectTitle = document.getElementById("project-title").value; // Potentially add '.trim()' to the end of this line if there's whitespace that needs to be removed

//   if (projectTitle) {
//     const newProject = new Project(projectTitle);
//     myProjects.push(newProject);
//     renderProject();
//   }
// }
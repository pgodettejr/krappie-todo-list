import { renderProject } from "./krappieUI";


// List of projects and tasks within those projects
const myProjects = [];

// Factory version example of the "Project" constructor above
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

// Old code for storing new "Project" objects into a new array via user input
// function storeProject() {
//   let projectTitle = document.getElementById("project-title").value; // Potentially add '.trim()' to the end of this line if there's whitespace that needs to be removed

//   if (projectTitle) {
//     const newProject = new Project(projectTitle);
//     myProjects.push(newProject);
//     renderProject();
//   }
// }

// TODO: Try to refactor this into a factory function in the future? Rename it to appStatus?
const appState = {
  myProjects: [],
  defaultProject: createProject("Default"),
  // OPTION: Add "Priority Level" drop-down menu and "Description" text box. Need to be rendered as well in UI file.
  addProject: function (myProject) { // May have to change "myProject" back to "projectTitle"
    
    // TODO: "newProject" may have to be renamed to "myProject"?
    // TODO: Should "projectTitle" be "myProject" as well or have no parameter at all?
    const newProject = createProject(projectTitle); 
    
    this.myProjects.push(newProject); // Does "myProjects" need to be "myProject" as well?
  },
  findProject: function (projectTitle) {
    return this.myProjects.find(myProject => myProject.projectTitle === projectTitle);
  }
};

// Code to test functions

// TODO: Make sure we call this on page load in index.js (put it at the top after imports). Add UI render elements as needed.
// appState.myProjects.push(appState.defaultProject);

// let project1 = appState.findProject("Default");

export { myProjects, createProject, storeProject, appState }
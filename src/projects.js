import * as krappieUI from "./krappieUI.js"; // Change this back to importing each export separately?


// List of projects and tasks within those projects
// const myProjects = [];

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

// OPTION: Try to refactor this into a factory function in the future? Rename it to appStatus?
const appState = {
  myProjects: [], // List of projects and tasks within those projects
  defaultProject: createProject("Today"),
  // OPTION: Add "Priority Level" drop-down menu and "Description" text box. Need to be rendered as well in UI file.
  // TODO: Confirmed that nothing is being added to the array when the UI confirm button is pressed after adding title text for the project.
  addProject: function () { // TODO: Neither "projectTitle" nor "project" work as a parameter here (in test IDE, "project" worked)
    let projectTitle = document.getElementById("project-title").value; // Potentially add '.trim()' to the end of this line if there's whitespace that needs to be removed

    if (projectTitle) {
      // TODO: Should "createProject" have no parameter at all?
      const newProject = createProject(projectTitle); 
      
      this.myProjects.push(newProject);
      // TODO: This function might be the issue as to why project isn't being added to the array or rendered to the UI?
      // This might not have to be here. Could maybe just run this under the button logic itself.
      krappieUI.renderProject(); // Remove the dot notation if changes on line 1 are made
      // console.table(myProjects);
    }
  },
  // TODO: May need to rename "myProject" to "project" and even change the parameter here to the same (see TODO above under "addProject" method)
  findProject: function (projectTitle) { 
    return this.myProjects.find(project => project.projectTitle === projectTitle); // TODO: This still might not work. Shows "(parameter) myProject: never"
  }
};

export { createProject, appState }

// Old code for storing new "Project" objects into a new array via user input
// function storeProject() {
//   let projectTitle = document.getElementById("project-title").value; // Potentially add '.trim()' to the end of this line if there's whitespace that needs to be removed

//   if (projectTitle) {
//     const newProject = new Project(projectTitle);
//     myProjects.push(newProject);
//     renderProject();
//   }
// }
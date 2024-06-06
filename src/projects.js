import * as krappieUI from "./krappieUI.js"; // Change this back to importing each export separately?

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
  addProject: function () {
    let projectTitle = document.getElementById("project-title").value; // Potentially add '.trim()' to the end of this line if there's whitespace that needs to be removed

    if (projectTitle) {
      const newProject = createProject(projectTitle); 
      
      this.myProjects.push(newProject);
      // This might not have to be here. Could maybe just run this under the button logic itself.
      krappieUI.renderProject(); // Remove the dot notation if changes on line 1 are made
    }
  },
  // TODO: This still might not work. Shows "(parameter) project: never". May need to rename "project" to something else in the find method.
  findProject: function (projectTitle) { 
    return this.myProjects.find(project => project.projectTitle === projectTitle); 
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
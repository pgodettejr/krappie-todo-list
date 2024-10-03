import { saveToStorage, getFromStorage } from "./localStorage.js";

// OPTION: Try to switch everything that fetches a project via its title to fetching it via its ID

// Creates "project" objects to be added to the "myProjects" array
function createProject (projectTitle) {
  const tasks = []; // Initializes tasks as an empty array
  let checked = false; // Checkbox whose default is not checked. Does NOT add the "checkbox" itself to the task

  // ID number for each project assigned at "random?" used to find the task that the user clicked on to modify or delete
  let id = Date.now().toString(); 

  return { projectTitle, tasks, checked, id }
}

const appState = {
  myProjects: getFromStorage() || [], // List of projects and tasks within those projects
  defaultProject: createProject("Today"),

  // Stores the "project" object to the myProjects array, then runs the project rendering function to display it on the UI
  // OPTION: Add "Priority Level" drop-down menu and "Description" text box. Need to be rendered as well in UI file.
  storeProject: function () {
    let projectTitle = document.getElementById("project-title").value.trim();

    if (projectTitle) {
      const newProject = createProject(projectTitle); 
      
      this.myProjects.push(newProject);
    }

    saveToStorage(this.myProjects);
  },

  // Finds a project in the myProjects array. This is used to find a project to update or delete in the methods below.
  readProject: function (projectTitle) { 
    return this.myProjects.find(project => project.projectTitle === projectTitle); 
  },

  // Finds and updates the name of an existing Project in the myProjects array.
  updateProject: function (currentTitle, newTitle) {
    const project = this.readProject(currentTitle);

    if (project) {
      project.projectTitle = newTitle;
    }

    saveToStorage(this.myProjects, currentTitle); 
  },

  // Deletes a project
  deleteProject: function (currentTitle) {
    const projectIndex = this.myProjects.findIndex(project => project.projectTitle === currentTitle);

    if (projectIndex !== -1) {
      this.myProjects.splice(projectIndex, 1);
    }

    saveToStorage(this.myProjects, currentTitle);
  },

  // OPTION/BRANCH: Toggles "complete" status of a project 
  // Not sure if 'project' should be a parameter here. Shows it as undefined by ESLint if I don't though.
  toggleProjectChecked: function (project) {
    this.readProject();
    project.checked = !project.checked
  }
};

export { createProject, appState }
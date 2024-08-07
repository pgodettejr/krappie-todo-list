// TODO: Try to switch everything that fetches a project via its title to fetching it via its ID

// import * as krappieUI from "./krappieUI.js";
// import { createTask, removeTask, updateTask, toggleTaskChecked, storeTask } from "./tasks.js";

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
    let projectTitle = document.getElementById("project-title").value.trim(); // Remove '.trim()' later on if it causes errors (added to address any whitespace)

    if (projectTitle) {
      const newProject = createProject(projectTitle); 
      
      this.myProjects.push(newProject);
    }
  },

  // Finds a project in the myProjects array. This is used to find a project to update or delete in the methods below.
  // TODO: When this is called, it's reading as 'projectTitle = undefined'. Is this only when the Default project is being updated or when it's ALL projects?
  readProject: function (projectTitle) { 
    return this.myProjects.find(project => project.projectTitle === projectTitle); 
  },

  // Finds and updates the name of an existing Project in the myProjects array. Placeholder for now.
  updateProject: function (currentTitle, newTitle) {
    const project = this.readProject(currentTitle);

    if (project) {
      project.projectTitle = newTitle;
    }
  },

  // Deletes a project
  deleteProject: function (currentTitle) {
    const projectIndex = this.myProjects.findIndex(project => project.projectTitle === currentTitle);

    if (projectIndex !== -1) {
      this.myProjects.splice(projectIndex, 1);
    }
  },

  // OPTION/BRANCH: Toggles "complete" status of a project 
  // Not sure if 'project' should be a parameter here. Shows it as undefined by ESLint if I don't though.
  toggleProjectChecked: function (project) {
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

// Old method in appState
// projectName: createProject.projectTitle, - Uncaught TypeError: Cannot convert undefined or null to object

// Old code & attempts for 'updateProject' method in appStatus

    // The fact that this is referencing the form value entered may be the reason why the array is not updating on 'Object.assign' below (assuming 'updates' object stays)
    // let projectTitle = document.getElementById("project-update-title").value; 

    // let projectTitle = createProject.projectTitle; - Uncaught TypeError: Cannot convert undefined or null to object

    // const updates = {
    //   projectTitle,
    //   // checked,
    //   // id
    // }

    // this.readProject();

    // When I tried to run this.myProjects.projectTitle as a target, I get "Uncaught TypeError: Cannot convert undefined or null to object"
    // Object.assign(projectTitle, updates);

    // const project = this.readProject();
    // if (project) {
    //   Object.assign(project, projectUpdates);
    // }

    // Attempt using 'projectTitle' and 'newTitle' as parameters in the method

    // const project = this.readProject(projectTitle);
    // project.projectTitle = newTitle;
    // Object.assign(project, newTitle);

    // const newTitle = document.getElementById("project-update-title").value;

// Old code for 'deleteProject' method in appStatus

// Previous code with 'projectIndex' as the function parameter for the method. 
// Misunderstanding of how 'splice' worked: thought I could remove the object itself when it only works with the index of an array
    
// this.myProjects.splice(projectIndex, 1); 
// krappieUI.renderProject();
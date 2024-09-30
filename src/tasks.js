import { createProject, appState } from './projects.js';
import { saveToStorage, getFromStorage } from "./localStorage.js";
// import * as krappieUI from './krappieUI.js'

// Creates "Task" objects & reports the "Task" added to the project inside the "myProjects" array (does NOT add it to the UI or array; there is a separate function for this)
function createTask (taskTitle, dueDate, priority, description) {
  let checked = false; // Checkbox whose default is not checked. Does NOT currently add the "checkbox" itself to the task (see HTML file for details). May need to be a method.

  // ID number for each project assigned at "random(?)" used to find the task that the user clicked on to modify or delete. Symbol("UID") could work as well?
  let id = Date.now().toString(); 

  return { taskTitle, dueDate, priority, description, checked, id };
}

// Finds a task within a project in the myProjects array. This is used to find a task to update or delete in the methods below.
// TODO: Do we need to call 'getFromStorage' anywhere in here? Find out. (look at other projects for examples?) - we REALLY don't want to
function readTask (taskId) { 
  for (const project of appState.myProjects) {
    const task = project.tasks.find(task => task.id === taskId);
    if (task) return task;
  }
}

// Deletes a task
// TODO: This still seems to be deleting the first task in the tasks array regardless of the task targeted for deletion (UI is correct). Will also need to test this on other projects to see if it affects all projects or just the default "Today" project.
function removeTask(taskId) {
  const taskFilter = readTask(taskId);
  if (taskFilter) {
    for (const project of appState.myProjects) {
      project.tasks.splice(taskFilter, 1);
    }
  }

  // TODO: Test this. Do we need to add 'taskId' as a second parameter? What about 'projectTitle' or the project's ID? Or leave it as is?
  saveToStorage(appState.myProjects); 
}

// Updates information on an existing task
function updateTask(taskId, updates) {
  const taskFind = readTask(taskId);
  if (taskFind) {
    Object.assign(taskFind, updates); 
  }

  saveToStorage(appState.myProjects); 

  return taskFind;
}

// Toggles "complete" status of a given task
function toggleTaskChecked(taskId) {
  const toggleStatus = readTask(taskId);
  if (toggleStatus) {
      toggleStatus.checked = !toggleStatus.checked;
  }

  // TODO: Test this. Do we need to add 'taskId' as a second parameter? What about 'projectTitle' or the project's ID? Or leave it as is?
  // For some reason, this deletes the task from the localStorage "array" without needing a function/method that actually deletes it
  // TODO: More research on localStorage.setItem and/or JSON.stringify and how it handles any "checked" status?
  // May move this to the Checkbox button logic in 'index.js' module
  saveToStorage(appState.myProjects); 
}

// Stores the "task" object to the target project (object) inside the 'myProjects' array, then runs the task rendering function to display it on the UI
// Add "projectIndex" back in as a function parameter if needed
function storeTask() {
  let taskTitle = document.getElementById("task-title").value.trim(); // Remove '.trim()' later on if it causes errors (added to address any whitespace)
  let dueDate = document.getElementById("due-date").value;
  let addToProject = document.getElementById("add-to-project").value;
  let priority = document.getElementById("priority").value;
  let description = document.getElementById("description").value;

  if (taskTitle && dueDate && addToProject && priority) { // Do we need !isNaN(dueDate) instead?
    const newTask = createTask(taskTitle, dueDate, priority, description);
    const targetProject = appState.readProject(addToProject);

    if (targetProject) {
      targetProject.tasks.push(newTask);
    }

    saveToStorage(appState.myProjects); 
  }
}

export { createTask, readTask, removeTask, updateTask, toggleTaskChecked, storeTask }
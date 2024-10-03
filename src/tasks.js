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
function readTask (taskId) { 
  for (const project of appState.myProjects) {
    const task = project.tasks.find(task => task.id === taskId);
    if (task) return task;
  }
}

// Deletes a task
function removeTask(taskId) {
  const taskFilter = readTask(taskId);
  if (taskFilter) {
    for (const project of appState.myProjects) {
      const taskFilterIndex = project.tasks.findIndex(task => task.id === taskFilter.id);

      if (taskFilterIndex != -1) {
        project.tasks.splice(taskFilterIndex, 1); 
      }

      // project.tasks.forEach(task => {
      //   if (task.id === taskFilter.id) { // May have to change 'task(Filter).taskId' to just 'task(Filter).id'

      //     // Uncaught TypeError: task.splice is not a function (when taskFilter.taskId or no ID # at all are the conditions above)
      //     // This is because the task is an object NOT an array (splice needs to target the tasks array or the myProjects array)

      //     // Error code: STATUS_BREAKPOINT (when trying 'project.tasks.splice(taskFilter, 1)')
      //     // task.splice(taskFilter, 1); 
      //   }
      // })
    }
  }

  saveToStorage(appState.myProjects); 

  console.log(appState.myProjects);
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

  saveToStorage(appState.myProjects); 
}

// Stores the "task" object to the target project (object) inside the 'myProjects' array, then runs the task rendering function to display it on the UI
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
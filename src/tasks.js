import { createProject, appState } from './projects.js';
import * as krappieUI from './krappieUI.js'

// Access to the tasks array inside of the createProject function
// If we remove this, we'd need to declare it in each function below as needed (not ALL of them)
let tasks = createProject.tasks;

// Creates "Task" objects & reports the "Task" added to the project inside the "myProjects" array (does NOT add it to the UI or array; there is a separate function for this)
function createTask (taskTitle, dueDate, priority, description) {
  let checked = false; // Checkbox whose default is not checked. Does NOT currently add the "checkbox" itself to the task (see HTML file for details). May need to be a method.

  // ID number for each project assigned at "random(?)" used to find the task that the user clicked on to modify or delete. Symbol("UID") could work as well?
  let id = Date.now().toString(); 

  // Alternate way of generating a random id number
  // let id = 0;
  // function getUniqueId(): string {
  //   return id++ + '';
  // }

  return { taskTitle, dueDate, priority, description, checked, id };
}

// Finds a task within a project in the myProjects array. This is used to find a task to update or delete in the methods below.
// OPTION: Potentially change this to 'findIndex' method. See if 'findIndex' works with the updateTask function below first beforehand.
function readTask (taskId) {
  return tasks.find(task => task.id === taskId);
}

// Deletes a task
// TODO: Can the ternary operator be written "cleaner"? Instead of using it within a declared variable, try another way (MDN doc - Ternary Operator)
function removeTask(taskId) {
  const taskFilter = tasks.findIndex(task => task.id === taskId);
  const taskItem = // OPTION: Write this as a traditional function instead, returning the ternary operator on the inside or an 'if' statement similar to deleteProject
    taskFilter != -1
      ? tasks.splice(taskFilter, 1)
      : "ERROR: Task not found";
  
  // TODO: Almost positive we need this, but delete it if not. Very small chance we're able to just return ternary operator with no additional variable.
  return taskItem; 
}

// Updates information on an existing task
// TODO: Change target of "tasks" back to "task"? Also, 'Object.assign' might not even work with 'updates' (it didn't for updateProject). Try 'map' function in old code below?
function updateTask(taskId, updates) {
  const taskFind = readTask(taskId);
  if (taskFind) {
    Object.assign(taskFind, updates); 
  }
}

// Toggles "complete" status of a given task
// TODO: Either logic to change the 'checked' status in the UI goes here or in the UI module or as button logic in the index module
function toggleTaskChecked(taskId) {
  const toggleStatus = tasks.find(task => task.id === taskId);
  if (toggleStatus) {
    toggleStatus.checked = !toggleStatus.checked;
  }
}

// Stores the "task" object to the target project (object) inside the 'myProjects' array, then runs the task rendering function to display it on the UI
// Add "projectIndex" back in as a function parameter if needed
function storeTask() {
  // const tasks = createProject.tasks;

  let taskTitle = document.getElementById("task-title").value; // Potentially add '.trim()' to the end of this line if there's whitespace that needs to be removed
  let dueDate = document.getElementById("due-date").value;
  let addToProject = document.getElementById("add-to-project").value;
  let priority = document.getElementById("priority").value;
  let description = document.getElementById("description").value;

  if (taskTitle && dueDate && addToProject && priority) { // Do we need !isNaN(dueDate) instead?
    appState.readProject(addToProject); // Do we even need this if targetProject is equal to this below? Test it out by commenting this code out in the future

    const newTask = createTask(taskTitle, dueDate, priority, description);
    const targetProject = appState.readProject(addToProject);

    if (targetProject) {
      targetProject.tasks.push(newTask);
    }
    
    krappieUI.renderTask();
  }
}

// Code to test functions

// let task1 = createTask (
//   "Buy Groceries", 
//   "2024-05-26", 
//   "Important", 
//   "Buy milk, eggs, bananas and kiwi for breakfast and smoothies"
// );

// let task2 = createTask (
//   "Finish To-Do List project", 
//   "2024-06-01", 
//   "Urgent", 
//   "Finish the To-Do List project assignment in TOP"
// );

// appState.defaultProject.addTask(
//   task1.todoTitle,
//   task1.dueDate,
//   task1.priority,
//   task1.description
// );

// appState.defaultProject.addTask(
//   task2.todoTitle,
//   task2.dueDate,
//   task2.priority,
//   task2.description
// );

// let taskIdNumber = appState.defaultProject.tasks[0].id;
// let taskIdNumber2 = appState.defaultProject.tasks[1].id;
// console.log(project1);

// Just having the properties by themselves threw a Ref Error of "property not defined" for each one
// May still need the values to be empty strings or just have no values at all in the future when UI is implemented despite Ref error

// const updates = {
//   taskTitle: "Buy More Groceries",
//   dueDate: "2024-06-01",
//   priority: "Urgent",
//   description: "Costco run"
// };

// Keep in mind these next tests might not work anymore due to separating the task functions from createProject for module purposes.

// appState.defaultProject.updateTask(taskIdNumber, updates);

// console.log(project1);
// console.log(appState.defaultProject.tasks);

// appState.defaultProject.toggleTaskChecked(todoIdNumber2);
// console.log(appState.defaultProject.tasks);

// appState.defaultProject.removeTask(todoIdNumber);
// console.log(appState.defaultProject.tasks);

// As the second index, currently this adds the entire object to "projectTitle", then leaves the other properties as undefined

// project2.addTodo(task2);
// console.log(project2);

export { tasks, createTask, removeTask, updateTask, toggleTaskChecked, storeTask }

// Old code for another solution I came up with on my own that updated list of tasks using map (Object.assign is cleaner). Keep it (in case of emergency, break glass)
//   function updateTask(todoId, updates) {
//     const revisedTasks = tasks.map(todo => {
//       if (task.id === taskId) {
//         return { ...task, ...updates }
//       }
//     });
    
//     return revisedTasks;
//   }

// Old code attempts at refactoring storeTask (under the 'if' statement)

// Uncaught TypeError: Cannot read properties of undefined (reading 'addTask'). Likely due to addTask function not being part of myProjects property (it's just an array).
// appState.myProjects[projectIndex].addTask(taskTitle, dueDate, priority, description); 

// Uncaught TypeError: createProject.addTask is not a function
// createProject.addTask(taskTitle, dueDate, priority, description); 

// My attempt at combining the previous two functions to get the task to be added to the tasks array within a project
// Uncaught TypeError: Cannot read properties of undefined (reading 'createProject')
// appState.myProjects[0].createProject.addTask(taskTitle, dueDate, priority, description);
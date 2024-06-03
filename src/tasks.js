import { myProjects, createProject, storeProject, appState } from '/projects.js';

// Function for making "Task" objects & reporting the "Task" added to the project (does NOT add it to the UI or array; there is a separate function for this)
// OPTION: Rename this function due to misleading name? (task doesn't actually get created, simply has contents of a given task)
function createTask (taskTitle, dueDate, priority, description) {
  let checked = false; // Checkbox whose default is not checked. Does NOT currently add the "checkbox" itself to the task (see HTML file for details). May need to be a method.

  // TODO: Call the .toString() method immediately next to Date.now()
  let id = Date.now(); // / ID number for each project assigned at "random?". Would be used to find the task that the user clicked on to delete. Symbol("UID") could work as well?

  // Alternate way of generating a random id number
  // let id = 0;
  // function getUniqueId(): string {
  //   return id++ + '';
  // }

  return { taskTitle, dueDate, priority, description, checked, id };
}

// Deletes a task
function removeTask(taskId) {
  const taskFilter = taskss.findIndex(task => task.id === taskId);
  const taskItem = 
    taskFilter != -1
      ? tasks.splice(todoFilter, 1)
      : "ERROR: Todo not found";
  
  // TODO: Might not need this. Delete if so. Might be able to just return ternary operator with no addt'l variable.
  return taskItem; 
}

// Updates information on an existing task
function updateTask(taskId, updates) {
  const taskFind = tasks.find(task => task.id === taskId); // Addt'l parentheses around task?
  if (taskFind) {
    Object.assign(taskFind, updates); // Change target of "tasks" back to "task"?
  }
}

// Toggles "complete" status of a given task
function toggleTaskChecked(taskId) {
  const toggleStatus = tasks.find(task => task.id === taskId); // Addt'l parentheses around task?
  if (toggleStatus) {
    toggleStatus.checked = !toggleStatus.checked;
  }
}

// Stores the "task" object to the projects array, then runs the task rendering function to display it on the UI
function storeTask(projectIndex) {
  let taskTitle = document.getElementById("task-title").value; // Potentially add '.trim()' to the end of this line if there's whitespace that needs to be removed
  let dueDate = document.getElementById("due-date").value;
  let priority = document.getElementById("priority").value;
  let description = document.getElementById("description").value;

  if (taskTitle && dueDate && priority) { // Do we need !isNaN(dueDate) instead?
    myProjects[projectIndex].addTask(taskTitle, dueDate, priority, description);
    renderTask();
  }
}

// Code to test functions

// let task1 = createTodo (
//   "Buy Groceries", 
//   "2024-05-26", 
//   "Important", 
//   "Buy milk, eggs, bananas and kiwi for breakfast and smoothies"
// );

// let task2 = createTodo (
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

return { createTask, removeTask, updateTask, toggleTaskChecked }

// Old code for another solution I came up with on my own that updated list of todos using map (Object.assign is cleaner). Keep it (in case of emergency, break glass)
//   function updateTodo(todoId, updates) {
//     const revisedTodos = todos.map(todo => {
//       if (todo.id === todoId) {
//         return { ...todo, ...updates }
//       }
//     });
    
//     return revisedTodos;
//   }
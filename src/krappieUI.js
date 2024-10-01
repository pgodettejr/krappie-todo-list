// TODO: Don't forget to create a container element in the DOM for everything to generate under, then return that container element at the bottom of this file

import { appState } from './projects.js';
import { tasks, createTask, readTask } from './tasks.js';
import { getFromStorage } from "./localStorage.js";
import Update from './img/update.png';
import Delete from './img/trash-bin.png';

// DOM elements related to adding and updating projects and tasks to the app
const projectDialog = document.getElementById("project-dialog");
const projectUpdateDialog = document.getElementById("project-update-dialog");
const confirmProject = document.getElementById("confirmProject");
const cancelProject = document.getElementById("cancelProject");
const editProject = document.getElementById("updateProject");

const taskDialog = document.getElementById("task-dialog");
const taskUpdateDialog = document.getElementById("task-update-dialog");
const confirmTask = document.getElementById("confirmTask");
const cancelTask = document.getElementById("cancelTask");
const editTask = document.getElementById("updateTask");

// Renders the default project named "Today" for daily projects & tasks on page load
function renderDefault() {

  // TODO: Test the 'for...of' loop change as 'for...in' was reading each project title as just its index # after adding localStorage
  // OPTION: don't run this function at all & still use 'for...of' ('push' method in index module would have different parameter)
  for (const project of appState.myProjects) {
    // DOM for "My Projects" section of the sidebar as well as the main area
    const projectSidebar = document.querySelector(".menu-2");
    const main = document.querySelector("main");

    // Generate the sidebar button
    const projectBtn = document.createElement("button");
    let projectBtnText = document.createTextNode(`${project.projectTitle}`);
    projectBtn.classList.add("project-btn");
    projectBtn.setAttribute("data-project-title", `${project.projectTitle}`);

    // Generate "Project" wrapper/container to be added to the main area
    const projectWrapper = document.createElement("div");
    projectWrapper.classList.add("project-wrapper");

    // Generate "Project Name" header to be added to the project container
    const projectName = document.createElement("h4");
    projectName.classList.add("project-name");
    projectName.innerText = project.projectTitle;

    // Render "Update" icon button to be added to "Project Name" header
    // TODO: May not allow the Project title itself to be updated by commenting this section out (do this later on after we finish using the default Project for testing)
    const updateBtn = document.createElement("button");
    updateBtn.classList.add("update-project");

    const updateIcon = new Image();
    updateIcon.src = Update;
    updateIcon.classList.add("image-button");

    // Render "Delete" icon button to be added to "Project Name" header
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-project");

    const deleteIcon = new Image();
    deleteIcon.src = Delete;
    deleteIcon.classList.add("image-button");

    // Append everything where it needs to be
    projectBtn.appendChild(projectBtnText);
    projectSidebar.appendChild(projectBtn);

    updateBtn.appendChild(updateIcon);
    deleteBtn.appendChild(deleteIcon);
    projectWrapper.appendChild(projectName);
    projectWrapper.appendChild(updateBtn);
    projectWrapper.appendChild(deleteBtn);

    main.appendChild(projectWrapper);
  }
}

// Renders all the projects and tasks from the user's previous session
function renderPrevSession() {
  const prevState = getFromStorage();

  if (prevState) {
    for (const project of prevState) {
        // DOM for "My Projects" section of the sidebar as well as the main area
      const projectSidebar = document.querySelector(".menu-2");
      const main = document.querySelector("main");

      // Generate the sidebar button
      const projectBtn = document.createElement("button");
      let projectBtnText = document.createTextNode(`${project.projectTitle}`);
      projectBtn.classList.add("project-btn");
      projectBtn.setAttribute("data-project-title", `${project.projectTitle}`);

      // Generate "Project" wrapper/container to be added to the main area
      const projectWrapper = document.createElement("div");
      projectWrapper.classList.add("project-wrapper");

      // Generate "Project Name" header to be added to the project container
      const projectName = document.createElement("h4");
      projectName.classList.add("project-name");
      projectName.innerText = project.projectTitle;

      // Render "Update" icon button to be added to "Project Name" header
      const updateBtn = document.createElement("button");
      updateBtn.classList.add("update-project");

      const updateIcon = new Image();
      updateIcon.src = Update;
      updateIcon.classList.add("image-button");

      // Render "Delete" icon button to be added to "Project Name" header
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-project");

      const deleteIcon = new Image();
      deleteIcon.src = Delete;
      deleteIcon.classList.add("image-button");
      
      // Append everything where it needs to be
      projectBtn.appendChild(projectBtnText);
      projectSidebar.appendChild(projectBtn);

      updateBtn.appendChild(updateIcon);
      deleteBtn.appendChild(deleteIcon);
      projectWrapper.appendChild(projectName);
      projectWrapper.appendChild(updateBtn);
      projectWrapper.appendChild(deleteBtn);

      main.appendChild(projectWrapper);

      // Function and DOM for finding the correct (previously rendered) project to render the task to then declaring it afterwards
      function addToProjectUI (text) {
        const projectHeaders = document.querySelectorAll(".project-name");
        for (const projectHeader of projectHeaders) {
          if (projectHeader.textContent.trim() === text) {
            return projectHeader;
          }
        }

        return null;
      }

      const projectNameHeader = addToProjectUI(project.projectTitle);
      const targetProject = appState.readProject(project.projectTitle);

      targetProject.tasks.forEach((task) => { 
        if (task.taskTitle) {
          // Reads the status of 'checked' in the array, then adds 'done' & an empty string as toggle options for the `task-item-${isChecked}` class in the Task Name below
          const isChecked = task.checked ? 'done' : '';

          // Generate "Task" wrapper/container to be added to the main area (under the target Project)
          const taskWrapper = document.createElement("div");
          taskWrapper.setAttribute("data-key", task.id); // Sets a data-attribute equal to the ID of the rendered task that is pulled from the array
          taskWrapper.classList.add("task-wrapper");

          // Renders the checkbox elements
          const taskCheckbox = document.createElement("input");
          taskCheckbox.setAttribute("id", task.id); // See "taskWrapper" above except this is for setting the id
          taskCheckbox.setAttribute("type", "checkbox");

          const taskCheckboxLabel = document.createElement("label");
          taskCheckboxLabel.setAttribute("for", task.id); // See "taskWrapper" above except this is for setting the "for" in the label element
          taskCheckboxLabel.classList.add("js-tick");

          // Places the checkbox elements under the Task wrapper/container
          taskWrapper.appendChild(taskCheckbox);
          taskWrapper.appendChild(taskCheckboxLabel);

          // Renders the wrapper/container that holds the text details of the task (Name, Due Date, Priority Level, Description)
          const taskDetails = document.createElement("div");
          taskDetails.setAttribute("data-key", task.id);
          taskDetails.classList.add("task-details");

          // Renders the name of the task entered (as a list element so the user can have a list of tasks?)
          const taskName = document.createElement("p");
          taskName.setAttribute("data-key", task.id); // See "taskWrapper above"
          taskName.classList.add(`task-item-${isChecked}`);

          // Renders <p> tags for the Date and Priority level from the "Add Task" form (to be used as parents for the text info below)
          const taskDate = document.createElement("p");
          const taskPriority = document.createElement("p");

          taskDate.classList.add("task-date");
          taskPriority.classList.add("task-priority");
          
          // Text info DOM that takes user input from the "Add Task" form and creates text nodes to be attached to the <p> tags above
          const taskNameInfo = document.createTextNode(`${task.taskTitle}`);
          const taskDateInfo = document.createTextNode(`${task.dueDate}`);
          const taskPriorityInfo = document.createTextNode(`${task.priority}`);

          // Attaches text info via user input to the <p> tags that were created
          taskName.appendChild(taskNameInfo);
          taskDate.appendChild(taskDateInfo);
          taskPriority.appendChild(taskPriorityInfo);

          // Places the Name, Date, Priority level and Description as children under the Task Details wrapper/container
          taskDetails.appendChild(taskName);
          taskDetails.appendChild(taskDate);
          taskDetails.appendChild(taskPriority);

          // Places the wrapper containing the text details of the task under the Task wrapper/container
          taskWrapper.appendChild(taskDetails);

          // Render necessary elements from Description box to be added as text under the Task Details wrapper (if filled out by the user)
          if (task.description) {
            const taskDescription = document.createElement("p");
            taskDescription.classList.add("task-description");

            const taskDescriptionInfo = document.createTextNode(`${task.description}`);

            // Places the Description under the Task Details wrapper/container
            taskDescription.appendChild(taskDescriptionInfo);
            taskDetails.appendChild(taskDescription);
          }

          // Render "Update" icon button to be added to "Task Name" header
          const updateTaskBtn = document.createElement("button");
          updateTaskBtn.classList.add("update-task");

          const updateTaskIcon = new Image();
          updateTaskIcon.src = Update;
          updateTaskIcon.classList.add("image-button");

          // Render "Delete" icon button to be added to "Task Name" header
          const deleteTaskBtn = document.createElement("button");
          deleteTaskBtn.classList.add("delete-task");

          const deleteTaskIcon = new Image();
          deleteTaskIcon.src = Delete;
          deleteTaskIcon.classList.add("image-button");

          // Attaches button icon images to the buttons themselves
          updateTaskBtn.appendChild(updateTaskIcon);
          deleteTaskBtn.appendChild(deleteTaskIcon);
          
          // Places the "Update" and "Delete" buttons under the Task wrapper/container
          taskWrapper.appendChild(updateTaskBtn);
          taskWrapper.appendChild(deleteTaskBtn);

          // Places the task itself (via it's name) as a child under the Project Name header
          projectNameHeader.parentNode.appendChild(taskWrapper); 
        } else {
          console.error('Task not found in the tasks array');
        }
      })
    }
  }
}

// Renders all projects that are created via the "Add Project" form
function renderProject() {
  // My version provides immediate feedback ("faster"), is straightforward and avoids any synchronization issues between the form & array, but is less consistent especially if something goes wrong with the array & risks duplication if there is a delay on the array side making the UI less consistent

  let formTitle = document.getElementById("project-title").value.trim(); // Remove '.trim()' later on if it causes errors (added to address any whitespace)

  // OPTION: Alternative to rendering the correct project via the array instead of the form value. No conditional (if) required. More robust/consistent & provides a single source of truth, but "slower" & more complex. May need this after all in order to work with localStorage.

  // const lastProject = appState.myProjects[projects.length - 1];

  if (formTitle) { 
    // DOM for "My Projects" section of the sidebar as well as the main area
    const projectSidebar = document.querySelector(".menu-2");
    const main = document.querySelector("main");

    // Generate the sidebar button
    const projectBtn = document.createElement("button");
    let projectBtnText = document.createTextNode(`${formTitle}`);
    projectBtn.classList.add("project-btn");
    projectBtn.setAttribute("data-project-title", formTitle);

    // Generate "Project" wrapper/container to be added to the main area
    const projectWrapper = document.createElement("div");
    projectWrapper.classList.add("project-wrapper");

    // Generate "Project Name" header to be added to the project container
    const projectName = document.createElement("h4");
    projectName.classList.add("project-name");
    projectName.innerText = formTitle;

    // Render "Update" icon button to be added to "Project Name" header
    const updateBtn = document.createElement("button");
    updateBtn.classList.add("update-project");

    const updateIcon = new Image();
    updateIcon.src = Update;
    updateIcon.classList.add("image-button");

    // Render "Delete" icon button to be added to "Project Name" header
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-project");

    const deleteIcon = new Image();
    deleteIcon.src = Delete;
    deleteIcon.classList.add("image-button");
    
    // Append everything where it needs to be
    projectBtn.appendChild(projectBtnText);
    projectSidebar.appendChild(projectBtn);

    updateBtn.appendChild(updateIcon);
    deleteBtn.appendChild(deleteIcon);
    projectWrapper.appendChild(projectName);
    projectWrapper.appendChild(updateBtn);
    projectWrapper.appendChild(deleteBtn);

    main.appendChild(projectWrapper);

    // When here under renderProject():

    // This function will only replace the current project showing in main area once. Will not show another project afterwards if you click it's related sidebar button
    // No matter what button is clicked, all previous <ul> are removed and only the last <ul> shows, even if it's not related to the button clicked.
    // Keep in mind the <ul> remains when renderProject is run, but the project related to it inside the array is deleted due to splice

    // When placed in index.js by itself, the buttons do nothing on click

    // TODO: We need to figure out how to separate this code somehow. renderProject() is doing too much as it is
    // OPTION: HIDE the other projects in the main area instead of outright replacing their elements & add a button to "Show All Projects"
    const projectButtons = document.querySelectorAll(".project-btn");

    projectButtons.forEach(projectBtn => {
      projectBtn.addEventListener('click', () => { // Took the "e" out of the parentheses. Will put it back in if needed later on.
        // TODO: Code to generate the project related to the button clicked via "tabbed browsing" goes here. See example code in comments below.
        // Goal is to render the page elements of the corresponding button WITHOUT recreating the button again

        // TODO: Debug and step through this function and find out exactly what is happening when previously generated buttons are clicked (none of the buttons disappear)
        // NOTE: Do we need to write code that says if the value of the ul is equal to the value of the button, then replace any current content and append the ul of that button?
        main.replaceChildren();

        // OPTION: Try "renderProject(project name selected via button);" instead
        main.appendChild(projectWrapper); // currentProject argument gives Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.

        // Previous version that tried to run the code only if the text from the button and the ul matched up

        // const currentProject = document.querySelector(".project-name");

        // if (button.textContent === currentProject.textContent) {
        //   main.replaceChildren(); 
        //   main.appendChild(currentProject);
        // }
      });
    });
  }
}

// Function for rendering all Project options to the "Add to Project" drop-down menu in the Task form
// TODO: When I add the update elements straight up, there is no drop down in any form for "Add to Project"
function populateProjects() {
  const projectSelect = document.getElementById("add-to-project");
  // const updateSelect = document.getElementById("update-add-to-project");

  // Clears all existing project options before populating them (prevents duplication)
  projectSelect.innerHTML = '';

  for (const project of appState.myProjects) {
    const projectOption = document.createElement("option");
    let projectOptionText = document.createTextNode(`${project.projectTitle}`);

    if (project.projectTitle === "Today") {
      projectOption.setAttribute('selected', true);
    }

    projectOption.appendChild(projectOptionText);
    projectSelect.appendChild(projectOption);
    // updateSelect.appendChild(projectOption);
  }
}

// Function for dynamically adding the task to the target project in the <main> area
function renderTask() {
  let formTaskTitle = document.getElementById("task-title").value.trim(); // Remove '.trim()' later on if it causes errors (added to address any whitespace)
  let formDueDate = document.getElementById("due-date").value;
  let formProject = document.getElementById("add-to-project").value;
  let formPriority = document.getElementById("priority").value;
  let formDescription = document.getElementById("description").value;

  if (formTaskTitle && formDueDate && formProject && formPriority) { 

    // Function and DOM for finding the correct (previously rendered) project to render the task to then declaring it afterwards
    function addToProjectUI (text) {
      const projectHeaders = document.querySelectorAll(".project-name");
      for (const projectHeader of projectHeaders) {
        if (projectHeader.textContent.trim() === text) {
          return projectHeader;
        }
      }

      return null;
    }

    const projectNameHeader = addToProjectUI(formProject);
    const targetProject = appState.readProject(formProject);

    targetProject.tasks.forEach((task) => { 
      if (task.taskTitle === formTaskTitle) {
        // Reads the status of 'checked' in the array, then adds 'done' & an empty string as toggle options for the `task-item-${isChecked}` class in the Task Name below
        const isChecked = task.checked ? 'done' : '';

        // Generate "Task" wrapper/container to be added to the main area (under the target Project)
        const taskWrapper = document.createElement("div");
        taskWrapper.setAttribute("data-key", task.id); // Sets a data-attribute equal to the ID of the rendered task that is pulled from the array
        taskWrapper.classList.add("task-wrapper");

        // Renders the checkbox elements
        const taskCheckbox = document.createElement("input");
        taskCheckbox.setAttribute("id", task.id); // See "taskWrapper" above except this is for setting the id
        taskCheckbox.setAttribute("type", "checkbox");

        const taskCheckboxLabel = document.createElement("label");
        taskCheckboxLabel.setAttribute("for", task.id); // See "taskWrapper" above except this is for setting the "for" in the label element
        taskCheckboxLabel.classList.add("js-tick");

        // Places the checkbox elements under the Task wrapper/container
        taskWrapper.appendChild(taskCheckbox);
        taskWrapper.appendChild(taskCheckboxLabel);

        // Renders the wrapper/container that holds the text details of the task (Name, Due Date, Priority Level, Description)
        const taskDetails = document.createElement("div");
        taskDetails.setAttribute("data-key", task.id);
        taskDetails.classList.add("task-details");

        // Renders the name of the task entered (as a list element so the user can have a list of tasks?)
        const taskName = document.createElement("p");
        taskName.setAttribute("data-key", task.id); // See "taskWrapper above"
        taskName.classList.add(`task-item-${isChecked}`);

        // Renders <p> tags for the Date and Priority level from the "Add Task" form (to be used as parents for the text info below)
        const taskDate = document.createElement("p");
        const taskPriority = document.createElement("p");

        taskDate.classList.add("task-date");
        taskPriority.classList.add("task-priority");
        
        // Text info DOM that takes user input from the "Add Task" form and creates text nodes to be attached to the <p> tags above
        const taskNameInfo = document.createTextNode(`${formTaskTitle}`);
        const taskDateInfo = document.createTextNode(`${formDueDate}`);
        const taskPriorityInfo = document.createTextNode(`${formPriority}`);

        // Attaches text info via user input to the <p> tags that were created
        taskName.appendChild(taskNameInfo);
        taskDate.appendChild(taskDateInfo);
        taskPriority.appendChild(taskPriorityInfo);

        // Places the Name, Date, Priority level and Description as children under the Task Details wrapper/container
        taskDetails.appendChild(taskName);
        taskDetails.appendChild(taskDate);
        taskDetails.appendChild(taskPriority);

        // Places the wrapper containing the text details of the task under the Task wrapper/container
        taskWrapper.appendChild(taskDetails);

        // Render necessary elements from Description box to be added as text under the Task Details wrapper (if filled out by the user)
        if (formDescription) {
          const taskDescription = document.createElement("p");
          taskDescription.classList.add("task-description");

          const taskDescriptionInfo = document.createTextNode(`${formDescription}`);

          // Places the Description under the Task Details wrapper/container
          taskDescription.appendChild(taskDescriptionInfo);
          taskDetails.appendChild(taskDescription);
        }

        // Render "Update" icon button to be added to "Task Name" header
        const updateTaskBtn = document.createElement("button");
        updateTaskBtn.classList.add("update-task");

        const updateTaskIcon = new Image();
        updateTaskIcon.src = Update;
        updateTaskIcon.classList.add("image-button");

        // Render "Delete" icon button to be added to "Task Name" header
        const deleteTaskBtn = document.createElement("button");
        deleteTaskBtn.classList.add("delete-task");

        const deleteTaskIcon = new Image();
        deleteTaskIcon.src = Delete;
        deleteTaskIcon.classList.add("image-button");

        // Attaches button icon images to the buttons themselves
        updateTaskBtn.appendChild(updateTaskIcon);
        deleteTaskBtn.appendChild(deleteTaskIcon);
        
        // Places the "Update" and "Delete" buttons under the Task wrapper/container
        taskWrapper.appendChild(updateTaskBtn);
        taskWrapper.appendChild(deleteTaskBtn);

        // Places the task itself (via it's name) as a child under the Project Name header
        projectNameHeader.parentNode.appendChild(taskWrapper); 
      } else {
        console.error('Task not found in the tasks array');
      }
    })
  }
};

export { projectDialog, projectUpdateDialog, confirmProject, cancelProject, editProject, renderDefault, renderPrevSession, renderProject, populateProjects, taskDialog, taskUpdateDialog, confirmTask, cancelTask, editTask, renderTask }
const localStorageKey = "projects";

function saveToStorage(projects) {
  localStorage.setItem(localStorageKey, JSON.stringify(projects));
}

function getFromStorage() {
  const projectData = JSON.parse(localStorage.getItem(localStorageKey));
  return projectData;
}

export { saveToStorage, getFromStorage };
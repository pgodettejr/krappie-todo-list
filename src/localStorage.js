const localStorageKey = "appState";

function saveToStorage(appState) {
  localStorage.setItem(localStorageKey, JSON.stringify(appState));
}

function getFromStorage() {
  const projectData = JSON.parse(localStorage.getItem(localStorageKey));
  console.log(projectData);
  return projectData ? projectData : null;
}

export { saveToStorage, getFromStorage };
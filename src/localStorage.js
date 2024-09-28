// TODO: Switch back to previous code in last GitHub push if the previous state doesn't show in the Applications tab in DevTools

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
export function loadState() {
  try {
    const serializedState = localStorage.getItem("users");
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

export function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("users", serializedState);
  } catch (e) {}
}

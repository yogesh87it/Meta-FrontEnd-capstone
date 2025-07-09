import { fetchAPI } from "../api"; // adjust the path

export function updateTimes(state, action) {
  return fetchAPI(action.date);
}

// Step 2: Initializer function
export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

console.log(fetchAPI);

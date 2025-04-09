// loginCheck.js
let inactivityTimeout;

// Set timeout period (in milliseconds)
const INACTIVITY_LIMIT = 15 * 60 * 1000; // 15 minutes

function checkLogin() {
  const loggedIn = sessionStorage.getItem("isLoggedIn");

  if (!loggedIn) {
    // If not logged in, redirect to login page
    window.location.href = "https://idksenpai.github.io/Learn-More/"; // Change to your login page URL
  } else {
    // If logged in, set up inactivity detection
    resetInactivityTimer();
    document.body.addEventListener("mousemove", resetInactivityTimer); // Detect mouse movement
    document.body.addEventListener("keydown", resetInactivityTimer); // Detect keypress
  }
}

// Reset the inactivity timer
function resetInactivityTimer() {
  clearTimeout(inactivityTimeout); // Clear the previous timer

  // Set a new timer to log the user out after the inactivity period
  inactivityTimeout = setTimeout(logout, INACTIVITY_LIMIT);
}

// Log the user out automatically after inactivity
function logout() {
  sessionStorage.removeItem("isLoggedIn");
  window.location.href = "https://idksenpai.github.io/Learn-More/"; // Redirect to login page after automatic logout
}

checkLogin(); // Call the checkLogin function to enforce login and inactivity detection

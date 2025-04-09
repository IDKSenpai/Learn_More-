let video = document.getElementById("mainVideo");
let currentActive = null; // Track active lesson
let firstLesson = document.querySelector(".videos a"); // Select first lesson link

// Function to play video and apply active style
function playLesson(videoSrc, element, event = null) {
  if (event) event.preventDefault(); // Prevent navigation

  video.src = videoSrc;
  video.play();

  // Remove black background from previous selection
  if (currentActive) {
    currentActive.classList.remove("active");
  }

  // Add black background to clicked lesson
  element.classList.add("active");
  currentActive = element;
}

// Play the first lesson automatically on page load
window.onload = function () {
  if (firstLesson) {
    playLesson(firstLesson.getAttribute("href"), firstLesson);
  }
};

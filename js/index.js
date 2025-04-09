const validateLogin = (event) => {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var username_login = ["GG", "gg"];

  if (username_login.includes(username) && password === "2799") {
    // Correct login, set sessionStorage to indicate that the user is logged in
    sessionStorage.setItem("isLoggedIn", "true");

    history.replaceState(
      null,
      null,
      "https://IDKSenpai.github.io/Learn-More/html/home_page.html"
    );
    window.location.href = window.location.href =
      "https://IDKSenpai.github.io/Learn-More/html/home_page.html";
    return true;
  }

  alert("Login failed!");
  return false;
};

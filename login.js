function login() {
  // Hide the login and signup forms
  document.querySelector(".container").style.display = "none";

  // Show the home page with animation
  const homePage = document.getElementById("home");
  homePage.style.display = "block";
  homePage.classList.add("animated");
}

function signup() {
  // Hide the login and signup forms
  document.querySelector(".container").style.display = "none";
  document.getElementById("signup").style.display = "none";

  // Show the home page with animation
  const homePage = document.getElementById("home");
  homePage.style.display = "block";
  homePage.classList.add("animated");
}

function showSignup() {
  // Hide the login form, show the signup form
  document.querySelector(".container").style.display = "none";
  document.getElementById("signup").style.display = "block";
}

function showLogin() {
  // Hide the signup form, show the login form
  document.getElementById("signup").style.display = "none";
  document.querySelector(".container").style.display = "block";
}

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

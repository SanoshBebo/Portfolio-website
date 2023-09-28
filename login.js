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

// function signInWithGoogle() {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then((result) => {
//         // Successful authentication, handle the user data (e.g., store it or redirect to the home page).
//         const user = result.user;
//         console.log('Logged in user:', user);
//       })
//       .catch((error) => {
//         // Handle errors here (e.g., display an error message).
//         console.error('Google Sign-In Error:', error);
//       });
//   }

//             // Listen for authentication state changes
//     firebase.auth().onAuthStateChanged((user) => {
//         if (user) {
//         // User is signed in, you can redirect to the home page or perform other actions.
//         console.log('User is signed in:', user);
//         } else {
//         // User is signed out.
//         console.log('User is signed out.');
//         }
//     });

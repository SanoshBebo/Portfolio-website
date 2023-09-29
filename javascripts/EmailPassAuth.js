//Update the below URL with the appropriate version if necessary.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA414QzIieqN6LRSsXYRIMn633h-yRWI3w",
  authDomain: "customproject-219bf.firebaseapp.com",
  databaseURL:
    "https://customproject-219bf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "customproject-219bf",
  storageBucket: "customproject-219bf.appspot.com",
  messagingSenderId: "786223631086",
  appId: "1:786223631086:web:72647a80aea7c22bf741ff",
  measurementId: "G-9NC18VYCK0",
};

const EmailApp = initializeApp(firebaseConfig);
const EmailAuth = getAuth(EmailApp);
const EmailFirestore = getFirestore(EmailApp);

const loginemailInput = document.getElementById("login-email-input");
const loginpasswordInput = document.getElementById("login-password-input");
const signupemailInput = document.getElementById("signup-email-input");
const signuppasswordInput = document.getElementById("signup-password-input");
const loginButton = document.querySelector(".login-button");
const signupButton = document.querySelector(".signup-button");

const userSignUp = async () => {
  const signUpEmail = signupemailInput.value;
  const signUpPassword = signuppasswordInput.value;
  const signUpName = document.getElementById("signup-fullname-input").value; // Get the user's full name

  console.log(signUpEmail, signUpPassword);

  createUserWithEmailAndPassword(EmailAuth, signUpEmail, signUpPassword)
    .then(async (userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("Your account has been created!");

      // Add the user's name and email to Firestore
      try {
        const docRef = await addDoc(collection(EmailFirestore, "users"), {
          name: signUpName,
          email: signUpEmail,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.error("Error adding document: ", error);
      }

      location.replace("../home.html");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
};

const userSignIn = async () => {
  const signInEmail = loginemailInput.value;
  const signInPassword = loginpasswordInput.value;
  signInWithEmailAndPassword(EmailAuth, signInEmail, signInPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("You have signed in successfully!");
      location.replace("../index.html");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
};

signupButton.addEventListener("click", userSignUp);
loginButton.addEventListener("click", userSignIn);

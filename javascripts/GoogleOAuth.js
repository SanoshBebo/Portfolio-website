import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const googleSignInButtons = document.querySelectorAll(".google-signin-button");

const GoogleSignIn = async () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      location.replace("./index.html");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

googleSignInButtons.forEach((button) => {
  button.addEventListener("click", GoogleSignIn);
});

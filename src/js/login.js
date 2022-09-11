import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "./libs/firebaseConfig";
import { showNotification } from "./libs/utils";

console.log(auth);

showNotification("Login Page");

const loginForm = document.querySelector(".loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log("user logged in");
        })
        .catch((err) => {
            console.log(err.message);
        });
});

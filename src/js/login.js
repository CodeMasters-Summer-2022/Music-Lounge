import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "./libs/firebaseConfig";
import { showNotification } from "./libs/utils";

console.log(auth);

showNotification("Login Page");

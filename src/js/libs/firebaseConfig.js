// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.MUSIC_LOUNGE_FIREBASE_API_KEY,
  authDomain: process.env.MUSIC_LOUNGE_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.MUSIC_LOUNGE_FIREBASE_DATABASE_URL,
  projectId: process.env.MUSIC_LOUNGE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.MUSIC_LOUNGE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.MUSIC_LOUNGE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.MUSIC_LOUNGE_FIREBASE_APP_ID
};

// Initialize Firebase Services
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app)

// export the service objects
export { db, storage, auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3P7Q92OQ8E5BlEUjw34az8h6lx3PF6DE",
  authDomain: "foots-web.firebaseapp.com",
  projectId: "foots-web",
  storageBucket: "foots-web.appspot.com",
  messagingSenderId: "816203891402",
  appId: "1:816203891402:web:5ebd946ba051779f366a33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const storage = getStorage(app);
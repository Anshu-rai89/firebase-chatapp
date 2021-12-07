// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw7yoW5z2K-LmpjjqF6pHvLPbhS72dXKg",
  authDomain: "chat-app-1a2bc.firebaseapp.com",
  databaseURL: "https://chat-app-1a2bc-default-rtdb.firebaseio.com",
  projectId: "chat-app-1a2bc",
  storageBucket: "chat-app-1a2bc.appspot.com",
  messagingSenderId: "148615798371",
  appId: "1:148615798371:web:30d3b5c77514da72382256",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

console.log("authis ", auth);
export const database = firebase.database();

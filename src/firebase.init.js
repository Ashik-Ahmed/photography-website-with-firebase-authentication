import { getAuth } from 'firebase/auth';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGfUdvo8mUjAK553KKjjmJXJChreBmdjw",
    authDomain: "assignment-firebase-auth.firebaseapp.com",
    projectId: "assignment-firebase-auth",
    storageBucket: "assignment-firebase-auth.appspot.com",
    messagingSenderId: "87220516233",
    appId: "1:87220516233:web:5199d3311d1ba02a3d1d58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
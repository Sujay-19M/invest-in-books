// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqnbKIJRtNj73H09KAqKgpmVU3gvzgAqc",
  authDomain: "invest-in-books.firebaseapp.com",
  projectId: "invest-in-books",
  storageBucket: "invest-in-books.firebasestorage.app",
  messagingSenderId: "503080473473",
  appId: "1:503080473473:web:ed856a1604bb5817a8ce80",
  measurementId: "G-BLLLQKLLCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

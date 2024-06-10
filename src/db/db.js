// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_YUgaivMq-qODVETZGA-mDwqZA1eLCts",
  authDomain: "animedb-project.firebaseapp.com",
  projectId: "animedb-project",
  storageBucket: "animedb-project.appspot.com",
  messagingSenderId: "382361713960",
  appId: "1:382361713960:web:edcf09c124674f5f54641d",
  measurementId: "G-VBE3TNS6PR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
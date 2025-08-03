// src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const FirebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "your-project-id.firebaseapp.com",
//   projectId: "your-project-id",
//   storageBucket: "your-project-id.appspot.com",
//   messagingSenderId: "YOUR_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// const app = initializeApp(FirebaseConfig);
// export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLAQCOTJd5Rwk5Yh355K-74bTp4KGDCIc",
  authDomain: "ecommerse-8e7ee.firebaseapp.com",
  projectId: "ecommerse-8e7ee",
  storageBucket: "ecommerse-8e7ee.firebasestorage.app",
  messagingSenderId: "797557764330",
  appId: "1:797557764330:web:984b94878aa991711da793",
  measurementId: "G-3CXN72EPXY"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8QmWJ1yms6S57mOOFf-a68bWc2gDdFSo",
  authDomain: "pk-qr-generator.firebaseapp.com",
  projectId: "pk-qr-generator",
  storageBucket: "pk-qr-generator.appspot.com",
  messagingSenderId: "689916615072",
  appId: "1:689916615072:web:56b9937a36a7f6be316cc5",
  measurementId: "G-0EBBP345TV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-oDjlfOrPlfZpUdmx2Ecfk1vN2IJvn6U",
  authDomain: "main-red-onion-d4f88.firebaseapp.com",
  projectId: "main-red-onion-d4f88",
  storageBucket: "main-red-onion-d4f88.appspot.com",
  messagingSenderId: "456943677759",
  appId: "1:456943677759:web:15fe90ab80ce476cf9a38a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth;
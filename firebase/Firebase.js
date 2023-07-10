// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUPhJqcr3I5sCVDq0vj-9CvplWjzRCl1s",
  authDomain: "flight-booking-f941b.firebaseapp.com",
  projectId: "flight-booking-f941b",
  storageBucket: "flight-booking-f941b.appspot.com",
  messagingSenderId: "288121104845",
  appId: "1:288121104845:web:fba639c97fa14e30317c84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
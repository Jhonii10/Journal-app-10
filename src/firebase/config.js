// configuracion de firebase 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVLVpRVwQOfUhUO6dOk8ZAqNBJI4lnHFo",
  authDomain: "journal-app-10.firebaseapp.com",
  projectId: "journal-app-10",
  storageBucket: "journal-app-10.appspot.com",
  messagingSenderId: "592448183804",
  appId: "1:592448183804:web:800a37e45a65ab5e6d2679",
  measurementId: "G-5V4KT1C399"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
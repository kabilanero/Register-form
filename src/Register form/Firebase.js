// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBTx4kJiFN8s7LhNr1zYarYKL5ZnUTBlY",
  authDomain: "registration-99f28.firebaseapp.com",
  projectId: "registration-99f28",
  storageBucket: "registration-99f28.appspot.com",
  messagingSenderId: "345145932976",
  appId: "1:345145932976:web:e02373764eef747fd8cf75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database=getAuth(app)
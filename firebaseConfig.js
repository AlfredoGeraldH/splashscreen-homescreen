import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  initializeAuth,
  getReactNativePersistence,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDkDxFbHw9ao9Rjb1sDx4_snKwtzKebC88",
  authDomain: "odpbni-c8ce2.firebaseapp.com",
  projectId: "odpbni-c8ce2",
  storageBucket: "odpbni-c8ce2.appspot.com",
  messagingSenderId: "415581707511",
  appId: "1:415581707511:web:551a999ae50af7ad8007f2",
  measurementId: "G-CZELQ41Y8W",
};

// Initialize Firebase Authentication and get a reference to the service
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export {
  app,
  auth,
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};

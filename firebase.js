import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVQULsZF6SkxlmYjLrtEnwRd_lm2kAHSQ",
  authDomain: "amazproject-1.firebaseapp.com",
  projectId: "amazproject-1",
  storageBucket: "amazproject-1.appspot.com",
  messagingSenderId: "191499141987",
  appId: "1:191499141987:web:974a4a3210f0550fdc4956",
  measurementId: "G-JTZZNXG71N"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

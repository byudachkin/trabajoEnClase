import app from "firebase/app";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC_JjS5HT_GH8OZWoQgpSN8CacBCZwrcaU",
  authDomain: "clase11-2f571.firebaseapp.com",
  projectId: "clase11-2f571",
  storageBucket: "clase11-2f571.firebasestorage.app",
  messagingSenderId: "523837817989",
  appId: "1:523837817989:web:b97463172b07441d24d5ec"
};

app.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const storage = app.storage()
export const db = app.firestore()
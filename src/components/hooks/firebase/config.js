import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
//Firestore Config File for Project Minecraft NPC get Admin data//
const firebaseConfig = {
  apiKey: "AIzaSyD48d2iis9NGn4yfWv_iDEbaxbhec8PGn0",
  authDomain: "minecraft-firestore.firebaseapp.com",
  projectId: "minecraft-firestore",
  storageBucket: "minecraft-firestore.appspot.com",
  messagingSenderId: "410570738947",
  appId: "1:410570738947:web:a593000a25c383f8606d36",
  measurementId: "G-496BYTSF3L",
};

initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      window.location.href = "/";
    })
    .catch((error) => {
      console.log(error);
    });
};

export { db, auth, signInWithGoogle };

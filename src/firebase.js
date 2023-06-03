import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9asE0lBjrlvY4n0cAUKwZzXT9sxzWU1Q",
  authDomain: "to-do-2c247.firebaseapp.com",
  projectId: "to-do-2c247",
  storageBucket: "to-do-2c247.appspot.com",
  messagingSenderId: "741965946169",
  appId: "1:741965946169:web:3331cb11d363042395dce8",
  measurementId: "G-LH3QFENB5R"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
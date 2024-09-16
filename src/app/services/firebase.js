// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC39-o7kpffP3Frt2aVtyhKGagw09zqtaU",
  authDomain: "auction-bac9b.firebaseapp.com",
  projectId: "auction-bac9b",
  storageBucket: "auction-bac9b.appspot.com",
  messagingSenderId: "421575764356",
  appId: "1:421575764356:web:0259d3198fb24e55bf55d1",
  measurementId: "G-WV2NDB4ZLH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

// signup with password and email
export const signUpWithEmailAndPassword = async (email, password) => {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user; // Return the signed-in user object
  } catch (error) {
    throw new Error(error.message); // Throw error for handling in your component
  }
};

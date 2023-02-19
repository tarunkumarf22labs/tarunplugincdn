import { initializeApp } from 'firebase/app';
import {getFirestore} from "firebase/firestore"
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey:   import.meta.env.VITE_API_KEY_Firebase,
  authDomain: import.meta.env.VITE_API_KEY_Firebase_authDomain,
  projectId: import.meta.env.VITE_API_KEY_Firebase_projectId,
  storageBucket: import.meta.env. VITE_API_KEY_Firebase_storageBucket,
  messagingSenderId: import.meta.env.VITE_API_KEY_Firebase_messagingSenderId,
  appId: import.meta.env.VITE_API_KEY_Firebase_appId,
};

// Initialize Firebase


 const app =   initializeApp(firebaseConfig);
 export const db = getFirestore(app)

import { initializeApp } from 'firebase/app';
import {getFirestore} from "firebase/firestore"
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWtYEgjMfNh-b1z0khTC1sfbl8DC6opwA",
    authDomain: "dummycollectiongame.firebaseapp.com",
    projectId: "dummycollectiongame",
    storageBucket: "dummycollectiongame.appspot.com",
    messagingSenderId: "911501171528",
    appId: "1:911501171528:web:a8e73335d7ef7f3bce317d"
};

// Initialize Firebase


 const app =   initializeApp(firebaseConfig);
 export const db = getFirestore(app)

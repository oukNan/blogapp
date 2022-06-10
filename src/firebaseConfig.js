// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import{ getStorage} from 'firebase/storage';




const firebaseConfig = {
  apiKey: "AIzaSyDiikO-VmjVbtPSwHq29rAtNxKzTE3v494",
  authDomain: "blogapp-3c8f6.firebaseapp.com",
  projectId: "blogapp-3c8f6",
  storageBucket: "blogapp-3c8f6.appspot.com",
  messagingSenderId: "142592420846",
  appId: "1:142592420846:web:258e926617b7f47eeebcff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
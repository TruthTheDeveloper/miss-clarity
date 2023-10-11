import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: 'AIzaSyCHWozk6IQvCbwWf3mH5wrMa7XBjfcXiFU',
  authDomain: 'miss-elegance.firebaseapp.com',
  projectId: 'miss-elegance',
  storageBucket: 'miss-elegance.appspot.com',
  messagingSenderId: '602923477992',
  appId: '1:602923477992:web:b532e750f7fb26d4ba525d',
  measurementId: 'G-4740MVXPG0'
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

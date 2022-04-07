import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  updateDoc
} from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut,
  onAuthStateChanged
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCJQFP14qMtKr-yuRVY_mJsiu-Bbep_8-8",
    authDomain: "osono-25ad4.firebaseapp.com",
    projectId: "osono-25ad4",
    storageBucket: "osono-25ad4.appspot.com",
    messagingSenderId: "244241789358",
    appId: "1:244241789358:web:05e010dbc9a1276dd8583f"
  };

  //init firebase
  initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth();

  // collection init
const chatsDB = collection(db, 'chats');
  export { db };
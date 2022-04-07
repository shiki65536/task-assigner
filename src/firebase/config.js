import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref } from 'firebase/storage';
import { getAuth, updateProfile, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCJQFP14qMtKr-yuRVY_mJsiu-Bbep_8-8",
  authDomain: "osono-25ad4.firebaseapp.com",
  projectId: "osono-25ad4",
  storageBucket: "osono-25ad4.appspot.com",
  messagingSenderId: "244241789358",
  appId: "1:244241789358:web:05e010dbc9a1276dd8583f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);

// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }


export {auth, db, updateProfile, onAuthStateChanged, createUserWithEmailAndPassword, storage, ref}


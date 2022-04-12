import { db, auth, storage } from '../firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';
import useAuthContext from './useAuthContext';
import {useState} from 'react';

function useSignup() {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState('');
  

  const signup = async (email, password, displayName, thumbnail) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password, displayName, thumbnail);
      if (!res) {
        console.log('cant signup');
      }
      const user = res.user;

      const imgRef = ref(storage, `thumbnails/${res.user.uid}/${thumbnail.name}`);
      const uploadTask = await uploadBytesResumable(imgRef, thumbnail);
      const imgUrl = await getDownloadURL(ref(storage, `thumbnails/${res.user.uid}/${thumbnail.name}`));
      const updateUser = await updateProfile(auth.currentUser, { displayName, photoURL: imgUrl });

      const userAdd = await setDoc(doc(db, `users/${res.user.uid}`), {
        displayName,
        photoURL: imgUrl,
      });

      dispatch({
        type: 'AUTH_READY',
        user
      })

    } catch (err) {
      console.log(err);
      setError('this email has been signed up')
    }

  }
  return { signup, error };

}

export default useSignup;
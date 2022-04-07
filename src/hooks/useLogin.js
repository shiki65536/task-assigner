import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config';
import useAuthContext from './useAuthContext';
import { setPersistence, browserSessionPersistence } from "firebase/auth"
import { useState } from 'react';

function useLogin() {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null)

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        dispatch({
          type: 'LOGIN',
          user
        })
      })
      .catch((err) => {
        setError('Email or password error')
      });

    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error.code, error.message);
      });

  }

  return { login, error };
}

export default useLogin;



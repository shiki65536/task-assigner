import { auth, onAuthStateChanged } from '../firebase/config';
import { createContext, useReducer, useEffect } from 'react';
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";


const AuthContext = createContext();
const initialAuth = {
    user: null,
    authIsReady: false,
    errMsg:''
};
const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
        case 'AUTH_READY':
            return { ...state, user: action.payload, authIsReady: true };
        case 'LOGIN':
            return { ...state, user: action.payload, authIsReady: true };
        case 'LOGOUT':
            return { ...state, user: null, authIsReady: false };
        case 'ERROR':
            return {...state, errMsg: 'No Such User'}
    }
};

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialAuth);

    useEffect(() => {
        const userAuth = onAuthStateChanged(auth, user => {
                 dispatch({
                    type: 'AUTH_READY',
                    payload: user
                })
             })
        userAuth()
    }, [state.user])

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider, AuthContext };


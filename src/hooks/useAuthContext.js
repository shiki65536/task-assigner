import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

function useAuthContext() {
    const context = useContext(AuthContext);

    if(!context) {
        throw Error('Error in use AuthContext');
    }
  return context;
}

export default useAuthContext
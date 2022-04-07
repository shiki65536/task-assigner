import {useState, useEffect} from 'react'
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from '../firebase/config'

function useCollection(term, _query) {
    const [collections, setCollections] = useState([]);

    const getStore = async (term, _query) => {
      const q = query(collection(db, term));
      if (_query) {
        q.where('category', '==', _query)
      }
      const unsubscribe = onSnapshot(q, (querySnapshot) => {

      const results = [];
      querySnapshot.forEach((doc) => {
          results.push({...doc.data(), id:doc.id});
      });
      setCollections(results)
    });
    }

    useEffect(()=>{  
      getStore(term);
    },[term])


  return {collections}
}

export default useCollection
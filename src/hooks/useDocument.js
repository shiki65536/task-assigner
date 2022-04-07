import { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config'

function useDocument(id) {

  const [document, setDocument] = useState({});

  useEffect(()=>{  
    const unsub = onSnapshot(doc(db, 'projects', id), (doc) => {
      setDocument(doc.data())
    });
    return ()=>unsub();
  },[id])



  return document;

}






export default useDocument
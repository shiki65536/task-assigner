import { collection, addDoc, Timestamp, doc, updateDoc, arrayUnion, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/config'


function useFirestore() {

    const addStore = async (title, detail, dueDate, createdBy, category, assignedList) => {
        try {
            const docRef = await addDoc(collection(db, 'projects'), {
                title,
                detail,
                dueDate,
                assignedList,
                category,
                createdBy,
                createdAt: Timestamp.fromDate(new Date())
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const delStore = async(collection, id) => {
        const delDoc = await deleteDoc(doc(db, collection, id));
    }

    const updateStore = async(collection, id, commentor, msg) =>{
        const docRef = doc(db, collection, id);
        const time = Timestamp.fromDate(new Date())
        const editDoc = await updateDoc(docRef, 
       { comments: arrayUnion({commentor, msg, time})}
      );
    }
    return { addStore, delStore, updateStore }
}

export default useFirestore;
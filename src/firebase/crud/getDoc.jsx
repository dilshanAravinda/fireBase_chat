import { collection, getDocs } from "firebase/firestore"; 
import { database as db } from "../config/firebaseConfig";

export const getSubcollectionData = async (collectionName, docId, subcollection) => {
    const subcollectionRef = collection(db, collectionName, docId, subcollection);
    const querySnapshot = await getDocs(subcollectionRef);
    const subcollectionData = querySnapshot.docs.map(doc => doc.data());
    return subcollectionData;
};

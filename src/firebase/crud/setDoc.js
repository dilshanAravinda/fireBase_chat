import { doc, setDoc } from "firebase/firestore"; 
import {database as db} from "../config/firebaseConfig"

export const setDocWithId = async(id, data)=>{ await setDoc(doc(db, "users", id),data)}
export const setDocWithId_onlineUser = async(id, data)=>{ await setDoc(doc(db, "users" ,"online", id),data, {merge: true})}
export const setDocWithId_register = async(id, data)=>{ await setDoc(doc(db, "users" ,"register", id),data, {merge: true})}
export const setDocWithId_subcollection = async (collection, docId, subcollection, subDocId, data) => { 
    await setDoc(doc(db, collection, docId, subcollection, subDocId), data, { merge: true }); 
};


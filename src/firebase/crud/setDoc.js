import { doc, setDoc } from "firebase/firestore"; 
import {database as db} from "../config/firebaseConfig"

export const setDocWithId = async(id, data)=>{ await setDoc(doc(db, "users", id),data)}
export const setDocWithId_onlineUser = async(id, data)=>{ await setDoc(doc(db, "users" ,"online", id),data)}
export const setDocWithId_register = async(id, data)=>{ await setDoc(doc(db, "users" ,"register", id),data)}
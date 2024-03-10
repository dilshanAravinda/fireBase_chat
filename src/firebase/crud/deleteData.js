import { doc, deleteDoc } from "firebase/firestore";
import {database as db} from '../config/firebaseConfig'

export const deleteData = async (id) => {
    await deleteDoc(doc(db, "users", id));
}
import { doc, getDoc } from "firebase/firestore";
import {database as db} from '../config/firebaseConfig'

export const getData = async (id) => {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    console.log("data is there "+ JSON.stringify(docSnap.data()))
  return {exists: true, data: docSnap.data()}
} else {
    return {exists: false}
}

}
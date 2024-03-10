import { collection, getDocs } from "firebase/firestore"; 
import {database as db} from "../config/firebaseConfig"


export const readData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
}
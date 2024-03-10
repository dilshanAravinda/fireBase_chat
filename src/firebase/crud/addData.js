// import { collection, addDoc } from "firebase/firestore"; 
// import {database} from '../../firebase/config/firebaseConfig'

// export const addData = async (collectionName,doc)=> {
//     // users
//     // {
//     //     first: "Ada",
//     //     last: "Lovelace",
//     //     born: 1815
//     //   }
//     try {
//         const docRef = await addDoc(collection(database, collectionName),doc);
//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
// }

import { collection, addDoc } from "firebase/firestore"; 
import {database as db} from '../config/firebaseConfig'

export const addData = async (doc) => {
    try {
        const docRef = await addDoc(collection(db, "users"), doc);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
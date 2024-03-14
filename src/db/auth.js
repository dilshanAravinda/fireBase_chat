import {
  collection,
  setDoc,
  doc,
//   serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { database as db } from "../firebase/config/firebaseConfig";

export const addUser = async (userData) => {
  const authCollectionRef = collection(db, "auth"); // Reference to the "auth" collection
  const userDocRef = doc(authCollectionRef, userData.uid); // Reference to the document with the specified ID
  await setDoc(userDocRef, userData); // Set the document data
};

export const getAllUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "auth"));
  const docs = [];
  querySnapshot.forEach((doc) => {
    doc.data();
    docs.push({ id: doc.id, ...doc.data() });
  });

  console.log("all users"+ JSON.stringify(docs))
  return docs;
};

// const getAllDocs = async (collectionName) => {
//     const querySnapshot = await getDocs(collection(db, collectionName));
//     const docs = [];
//     querySnapshot.forEach((doc) => {
//       // doc.data() is a method to get the data of each document
//       docs.push({ id: doc.id, ...doc.data() });
//     });
//     return docs;
//   };

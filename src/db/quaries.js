import { collection, query, where, getDocs } from "firebase/firestore";
import { database as db } from "../firebase/config/firebaseConfig";

export const getChatsByClientId = async (clientID) => {
    const parentCollectionRef = collection(db, "complaint-chat");
    const q = query(parentCollectionRef, where("clientId", "==", clientID));
    const querySnapshot = await getDocs(q);
  
    // Use Promise.all with map to wait for all async operations to complete
    const arr = await Promise.all(querySnapshot.docs.map(async (doc) => {
      const subcollectionRef = collection(doc.ref, "chat");
      const subcollectionSnapshot = await getDocs(subcollectionRef);
  
      const subArr = subcollectionSnapshot.docs.map(subDoc => subDoc.data());
  
      return {
        meta: doc.data(),
        data: subArr,
      };
    }));
  
    console.log(arr);
    return arr;
};
  
export const getChatsByServiceProviderId = async (spId) => {
    const parentCollectionRef = collection(db, "complaint-chat");
    const q = query(parentCollectionRef, where("spId", "==", spId));
    const querySnapshot = await getDocs(q);
  
    const arr = await Promise.all(querySnapshot.docs.map(async (doc) => {
      const subcollectionRef = collection(doc.ref, "chat");
      const subcollectionSnapshot = await getDocs(subcollectionRef);
  
      const subArr = subcollectionSnapshot.docs.map(subDoc => subDoc.data());
  
      return {
        meta: doc.data(),
        data: subArr,
      };
    }));
  
    console.log(arr);
    return arr;
  };
  
  export const getChatsByComplaintId = async (cmId) => {
    const parentCollectionRef = collection(db, "complaint-chat");
    const q = query(parentCollectionRef, where("complaintId", "==", cmId));
    const querySnapshot = await getDocs(q);
  
    const arr = await Promise.all(querySnapshot.docs.map(async (doc) => {
      const subcollectionRef = collection(doc.ref, "chat");
      const subcollectionSnapshot = await getDocs(subcollectionRef);
  
      const subArr = subcollectionSnapshot.docs.map(subDoc => subDoc.data());
  
      return {
        meta: doc.data(),
        data: subArr,
      };
    }));
  
    console.log(arr);
    return arr;
  };
  
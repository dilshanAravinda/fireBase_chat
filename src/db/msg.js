import { setDoc, doc, collection, addDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { database as db} from "../firebase/config/firebaseConfig";

/*
1. initChat(clientId , spId) returns reference;
2. sendMsg(ref, msgBody) returns true; 
3. findChatsBySp(sp); returns [chat refs];
4. findChatsByCl(cl); returns [chat refs];
5. findChatsByCmpl(cmpl); returns [chat refs];
6. findChat(sp, cl, cmpl) return ref;
*/
export const initChat = async(clientId, spId, complaintId)=> {
    const parentDocumentId = clientId + "-" + spId + "-" + complaintId;

    const parentDocRef = doc(db, 'complaint-chat', parentDocumentId);

     // Initialize chat by setting document data
     await setDoc(parentDocRef, { clientId, spId, complaintId, createdAt: serverTimestamp(), lastUpdatedAt: serverTimestamp() });

}

export const sendMsg = async (clientId, spId, complaintId, documentData) => {
    const parentDocumentId = clientId + "-" + spId + "-" + complaintId;

    // Reference to the parent document
    const parentDocRef = doc(db, 'complaint-chat', parentDocumentId);
    
    // Reference to the subcollection
    const subcollectionRef = collection(parentDocRef, "chat");

    // Send the message by adding a new document to the subcollection
    await addDoc(subcollectionRef, documentData);

    // Update the parent document's lastUpdatedAt field
    await updateDoc(parentDocRef, { lastUpdatedAt: serverTimestamp() });

    /*
    document data = {
        msg:
        timeStsmp: 
        type:
        sender:
        reciever: 
    }
    */
};

export const msgModel = (type, msg, sender, reciever) => ({type, msg, timeStamp: serverTimestamp(), sender, reciever});
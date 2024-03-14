import {onSnapshot, collection} from 'firebase/firestore';
import {database as db} from '../config/firebaseConfig';

// export const unsubscribe = onSnapshot(collection(database, 'users'), (snapshot) => {
//     const data = snapshot.docs.map(doc => doc.data());
//   });

export const subscribe = (cb)=> onSnapshot(collection(db, 'users'), cb);

export const subscribeToSubcollection = (mainDocId, cb) => {
    const subcollectionRef = collection(db, 'complaint-chat', mainDocId, 'chat');
    return onSnapshot(subcollectionRef, cb);
  };
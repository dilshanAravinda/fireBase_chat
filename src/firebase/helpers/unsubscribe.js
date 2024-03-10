import {onSnapshot, collection} from 'firebase/firestore';
import {database} from '../config/firebaseConfig';

// export const unsubscribe = onSnapshot(collection(database, 'users'), (snapshot) => {
//     const data = snapshot.docs.map(doc => doc.data());
//   });

export const subscribe = (cb)=> onSnapshot(collection(database, 'users'), cb);
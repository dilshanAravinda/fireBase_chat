import { collection, getDocs } from 'firebase/firestore';
import {database} from '../config/firebaseConfig';

export default async function generateId(db=database, collectionName="users") {
  try {
    const collectionRef = collection(db, collectionName);

    const querySnapshot = await getDocs(collectionRef);

    const numberOfDocuments = querySnapshot.size;
    console.log(numberOfDocuments);
    return numberOfDocuments;
  } catch (error) {
    console.error('Error getting number of documents in collection:', error);
    return -1; 
  }
}

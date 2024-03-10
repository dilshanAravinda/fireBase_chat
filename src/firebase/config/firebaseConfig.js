import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAmeyHIZ9WoX8EERXf3B4PKJrvuLOo6PFM",
    authDomain: "reactchatdemo-f2a5e.firebaseapp.com",
    projectId: "reactchatdemo-f2a5e",
    storageBucket: "reactchatdemo-f2a5e.appspot.com",
    messagingSenderId: "282357667460",
    appId: "1:282357667460:web:5fb5fc19a15e7563a1d4d1",
    measurementId: "G-VVNDVRLZDS"
  };
export const app =  initializeApp(firebaseConfig);
export const database = getFirestore(app);

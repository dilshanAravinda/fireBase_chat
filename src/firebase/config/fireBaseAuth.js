import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import {setDoc} from 'firebase/firestore';
// import {setDocWithId_onlineUser} from '../crud/setDoc';
import { addUser } from "../../db/auth";

export const signUpWithGoogle = (navigateFunc) => {
  const googleProvider = new GoogleAuthProvider();

  const auth = getAuth();
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      
      console.log("id"+ user.uid)
      console.log("email"+ user.email)
      console.log("name"+ user.displayName)
      addUser(
        {uid: user.uid, email: user.email, name: user.displayName}
      );
      navigateFunc('/chat');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      console.error(errorCode, errorMessage, email);
    });
};

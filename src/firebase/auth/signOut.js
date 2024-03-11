import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
export const googleSignOut = ()=> {
    signOut(auth).then(() => {
        console.log("successfully sign out !")
      }).catch((error) => {
        console.log('sign out error : '+ error)
      });
}
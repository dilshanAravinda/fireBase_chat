import {googleSignOut} from '../firebase/auth/signOut';

export default function SignOut({setIsSignOut}) {
    return(
      <button className="sign-out" onClick={()=> {googleSignOut(); setIsSignOut(true)}}>Sign Out</button>
    );
}

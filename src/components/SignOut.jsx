import { useNavigate } from 'react-router-dom';
import {googleSignOut} from '../firebase/auth/signOut';

export default function SignOut({setIsSignOut}) {
  const navigate = useNavigate();
    return(
      <button className="sign-out" onClick={()=> {googleSignOut(); setIsSignOut(true); navigate('/')}}>Sign Out</button>
    );
}

import { getAuth } from "firebase/auth";

export const currentUser = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    console.log(user.uid);
    console.log(user.displayName);
    console.log(user.email);
    return {
      uid : user.uid,
      displayName: user.displayName,
      email: user.email
    }

  } else return null;
  
};

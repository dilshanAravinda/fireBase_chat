import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; 

function UserProfile() {

  const [userProfile, setUserProfile] = useState(null);
    const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUserProfile(user);
        console.log(setUserProfile.photoURL)
      } else {
        setUserProfile(null);
      }
    });

    return unsubscribe; 
  }, []);

  return (
    <div>
      {userProfile ? (
        <div>
          <p>Welcome, {userProfile.displayName}</p>
          {userProfile.photoURL && (
            <img src={userProfile.photoURL} alt="Profile" />
          )}
        </div>
      ) : (
        <p>You are not signed in.</p>
      )}
    </div>
  );
}

export default UserProfile;

import React, { useState, useEffect } from 'react';
import { database } from '../config/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const DbData = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(database, 'users'), (snapshot) => {
      const data = snapshot.docs.map(doc => doc.data());
      setUserData(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Database Data:</h2>
      <ul>
        {userData.map((user, index) => (
          <li key={index}>{user.username} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default DbData;

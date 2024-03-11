// import {getAuth} from 'firebase/auth'
// import { app } from '../config/firebaseConfig';

// export const listAllUsers = (nextPageToken) => {
//     // List batch of users, 1000 at a time.
//     getAuth(app)
//       .listUsers(1000, nextPageToken)
//       .then((listUsersResult) => {
//         listUsersResult.users.forEach((userRecord) => {
//           console.log('user', userRecord.toJSON());
//         });
//         if (listUsersResult.pageToken) {
//           // List next batch of users.
//           listAllUsers(listUsersResult.pageToken);
//         }
//       })
//       .catch((error) => {
//         console.log('Error listing users:', error);
//       });
//   };
//   // Start listing users from the beginning, 1000 at a time.


  import { getAuth } from "firebase/auth";

export const currentUser = ()=> {
    const auth = getAuth();
const user = auth.currentUser;

if (user) {
    console.log(user.uid)
    console.log(user.displayName)
    console.log(user.email)
    // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/auth.user
  // ...
} else {
  // No user is signed in.
}
}
import { db } from "#utils/firebaseConfig";
import firebase from "firebase";
const updateLastSeen = (user) => {
  user &&
    db.collection("users").doc(user.uid).set(
      {
        email: user.email,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        photoURL: user.photoURL,
      },
      {
        merge: true,
      }
    );
};

export { updateLastSeen };

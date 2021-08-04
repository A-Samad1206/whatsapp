import firebase from 'firebase';
var firebaseConfig = {
  apiKey: 'AIzaSyB5Hyrggr0Eg8dvHmJ0hw1reRJr2Dpo6vk',
  authDomain: 'whatsapp2-f5d26.firebaseapp.com',
  projectId: 'whatsapp2-f5d26',
  storageBucket: 'whatsapp2-f5d26.appspot.com',
  messagingSenderId: '385032556588',
  appId: '1:385032556588:web:efb91584ad43c3f0ad4189',
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
let db = app.firestore();
let auth = app.auth();
// if (process.env.DB_HOST === 'localhost') {
//   db.useEmulator('localhost', 8080);
//   auth.useEmulator('http://localhost:9099/', { disableWarnings: true });
// }
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

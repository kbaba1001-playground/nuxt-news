import firebase from 'firebase';
import 'firebase/firestore';

console.log("foo", process.env.FIREBASE_API_KEY)

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID
});

const db = firebase.firestore();

export default db;

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDrjWZFRIz83Us7nvIlIEl3Gx2YB0RsR6U",
  authDomain: "tiputipu-8328d.firebaseapp.com",
  projectId: "tiputipu-8328d",
  storageBucket: "tiputipu-8328d.appspot.com",
  messagingSenderId: "151881462282",
  appId: "1:151881462282:web:8d38a7e7c8a8737c1225f3",
  measurementId: "G-YL5RC92Y61",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

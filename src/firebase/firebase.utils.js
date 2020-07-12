import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCQeFviEA6fVioiVztJjO6THsN4yACTIIU",
  authDomain: "udj-apparel-db.firebaseapp.com",
  databaseURL: "https://udj-apparel-db.firebaseio.com",
  projectId: "udj-apparel-db",
  storageBucket: "udj-apparel-db.appspot.com",
  messagingSenderId: "945814450182",
  appId: "1:945814450182:web:89cdcbe7666a9908d95387",
  measurementId: "G-04KE52W8WQ"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
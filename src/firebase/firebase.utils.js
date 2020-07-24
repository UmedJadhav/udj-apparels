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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return ;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if(!snapshot.exists){
    const { displayName, email } = userAuth; 
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })    
    }catch(error){
      console.log('Error Creating User', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  //batch storing the shop-data.js to firestore
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
}

export const converCollectionSnapshotToMap=(collections) =>{
  const transformedCollections = collections.docs.map(doc => {
      const { title, items } = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });

    return transformedCollections.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {}); // This returns the ShopData from Firestore
}


export const getCurrentUser = () =>( new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    },reject);
  })
)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"



const firebaseConfig = {
    
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
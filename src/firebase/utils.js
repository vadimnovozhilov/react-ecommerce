import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCsceLS3EVq-pFdOUm3pEG_71cN03KhY5s",
    authDomain: "reactecomm.firebaseapp.com",
    databaseURL: "https://reactecomm.firebaseio.com",
    projectId: "reactecomm",
    storageBucket: "reactecomm.appspot.com",
    messagingSenderId: "181012660649",
    appId: "1:181012660649:web:3ea02c10096db48fbac4b8"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
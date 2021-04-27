import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBZRB_2YO1o8O3JsSSYAvKfD7OTqxMLPMc",
    authDomain: "crw-db-445.firebaseapp.com",
    projectId: "crw-db-445",
    storageBucket: "crw-db-445.appspot.com",
    messagingSenderId: "471983355161",
    appId: "1:471983355161:web:89fabd59d3dfabe8d10188",
    measurementId: "G-5GGS7BY1R3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDp6NsbTP4WWSAVEvbN6F2LFa8fHbdrOTw",
    authDomain: "clothing-mart.firebaseapp.com",
    databaseURL: "https://clothing-mart.firebaseio.com",
    projectId: "clothing-mart",
    storageBucket: "clothing-mart.appspot.com",
    messagingSenderId: "786316467840",
    appId: "1:786316467840:web:e3fed767ea7932cd9b1065",
    measurementId: "G-Q78YW3TEZ5"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.error("Error while creating user", userRef, error.message);
        }
    }
    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
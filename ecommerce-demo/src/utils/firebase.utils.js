import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDL1FSiOHXsVlPUBfm8jgNQzxm6ft_jiKA",
  authDomain: "react-e-commerce-project.firebaseapp.com",
  databaseURL: "https://react-e-commerce-project.firebaseio.com",
  projectId: "react-e-commerce-project",
  storageBucket: "react-e-commerce-project.appspot.com",
  messagingSenderId: "95596149583",
  appId: "1:95596149583:web:8dae145857d8516f47e33a",
  measurementId: "G-WGBVJ88TSQ",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());
}

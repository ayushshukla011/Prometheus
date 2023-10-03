import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  addDoc,
  collection,
  doc,
} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDaaUFGf27GqatGVU0U8BYFhzfls94mrCg",
    authDomain: "promethus-130b5.firebaseapp.com",
    projectId: "promethus-130b5",
    storageBucket: "promethus-130b5.appspot.com",
    messagingSenderId: "301085053430",
    appId: "1:301085053430:web:735730fa4d1e6e7e5677d7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  
  export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
// Sign in and sign out functions
export const signInWithGoogleRedirect = () =>
signInWithRedirect(auth, googleProvider);

export const signUserAccountOut = () => signOut(auth);

//create cloud database
export const db=getFirestore(app);

const cardetailcollection = collection(db, "vechile");
// Add post to firestore database
export const addPostToDb = async (make, model, makeyear,trim,kmd,vnum,ins_valupto) => {
  await addDoc(cardetailcollection, {
    author: {
      name: auth.currentUser.displayName,
      id: auth.currentUser.uid,
      email: auth.currentUser.email,
      photoUrl: auth.currentUser.photoURL,
    },
    make, //title: title
    model,
    makeyear,
    trim,
    kmd,
    vnum,
    ins_valupto,
    date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
  });
};
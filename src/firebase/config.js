// Import the functions you need from the SDKs you need

import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDKOUtby7kNHf2V-O_KZ944cv2KXcS3-ec",

  authDomain: "react-firegram-ed4c7.firebaseapp.com",

  projectId: "react-firegram-ed4c7",

  storageBucket: "react-firegram-ed4c7.appspot.com",

  messagingSenderId: "94383812645",

  appId: "1:94383812645:web:bd99bc2a4c69ee9b9c0fcc"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
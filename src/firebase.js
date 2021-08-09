import firebase from "firebase/app";
import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConcfig = {
  // apiKey: process.env["REACT_APP_FIREBASE_API_KEY"],
  // authDomain: process.env["REACT_APP_FIREBASE_AUTH_DOMAIN"],
  // databaseURL: "https://bootcamp-april2021-3bbf9-default-rtdb.firebaseio.com",
  // projectId: process.env["REACT_APP_FIREBASE_PROJECT_ID"],
  // storageBucket: process.env["REACT_APP_FIREBASE_STORAGE_BUCKET"],
  // messagingSenderId: process.env["REACT_APP_FIREBASE_MESSAGING_SENDER_ID"],
  // appId: process.env["REACT_APP_FIREBASE_APP_ID"],
  apiKey: "AIzaSyBjtcAO5kq4mIR5iIIzHoXZYaBAAD5qveQ",
  authDomain: "bootcamp-april2021-3bbf9.firebaseapp.com",
  databaseURL: "https://bootcamp-april2021-3bbf9-default-rtdb.firebaseio.com",
  projectId: "bootcamp-april2021-3bbf9",
  storageBucket: "bootcamp-april2021-3bbf9.appspot.com",
  messagingSenderId: "984716894662",
  appId: "1:984716894662:web:bff7f2e9fe76d31ffed2c7",
  measurementId: "G-T69NPYLYGE",
};
firebase.initializeApp(firebaseConcfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;

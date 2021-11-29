import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAsRN-DEZo8HQMpwbGOY9BiXagCkAPKWzQ',
  authDomain: 'clone-99a08.firebaseapp.com',
  projectId: 'clone-99a08',
  storageBucket: 'clone-99a08.appspot.com',
  messagingSenderId: '533104828512',
  appId: '1:533104828512:web:f6886dcef7002dafe76305',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

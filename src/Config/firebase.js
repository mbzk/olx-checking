import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyDP8UHdeoff-Gn-5JzLSxn6cCyKEcGnDmw",
    authDomain: "olx-clone-377bf.firebaseapp.com",
    databaseURL: "https://olx-clone-377bf.firebaseio.com",
    projectId: "olx-clone-377bf",
    storageBucket: "olx-clone-377bf.appspot.com",
    messagingSenderId: "960866488507",
    appId: "1:960866488507:web:f519fb15856707739c199e",
    measurementId: "G-XB0T0484JC"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig); // ac to dc clone cp
const db = firebaseApp.database();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();



export default db;
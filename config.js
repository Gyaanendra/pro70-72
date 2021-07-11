import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyAdhvItWzS-w_FuFn4GxyGqKZaLqMJicG0",
    authDomain: "storyhub-707d6.firebaseapp.com",
    projectId: "storyhub-707d6",
    storageBucket: "storyhub-707d6.appspot.com",
    messagingSenderId: "149018162591",
    appId: "1:149018162591:web:fe5c31b7b3b9602ff939aa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore()
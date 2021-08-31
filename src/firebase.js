import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCNZtL5tfMs6pvPT3_j0AN1q_XhETXjmyc",
    authDomain: "tejasotp.firebaseapp.com",
    projectId: "tejasotp",
    storageBucket: "tejasotp.appspot.com",
    messagingSenderId: "937024523925",
    appId: "1:937024523925:web:3be8916126c380f892959c",
    measurementId: "G-MKB70HNJQ1"
  };


firebase.initializeApp(firebaseConfig)

export default firebase


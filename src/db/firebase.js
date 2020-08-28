import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAO5OdYisYNOD-VFA5Md7b9-aHK4ukc7vw",
    authDomain: "furkans-tinder.firebaseapp.com",
    databaseURL: "https://furkans-tinder.firebaseio.com",
    projectId: "furkans-tinder",
    storageBucket: "furkans-tinder.appspot.com",
    messagingSenderId: "190595885358",
    appId: "1:190595885358:web:24ded50b781364fb9572bf"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;
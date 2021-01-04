import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDpEWtR5GCAbBhPWGqxkAKn9SmBQnfQr7I",
    authDomain: "imessage-clone-yt-9afd6.firebaseapp.com",
    databaseURL: "https://imessage-clone-yt-9afd6.firebaseio.com",
    projectId: "imessage-clone-yt-9afd6",
    storageBucket: "imessage-clone-yt-9afd6.appspot.com",
    messagingSenderId: "900669277445",
    appId: "1:900669277445:web:aa5fd728486acd5f29a36c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth,provider};
  export default db;
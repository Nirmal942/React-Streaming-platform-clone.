import firebase from "firebase";
import firebase from "firebase";
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDa2-VW-CQVLG3ilMfhRVrAilzBAQai71c",
    authDomain: "netflix-clone-e636e.firebaseapp.com",
    projectId: "netflix-clone-e636e",
    storageBucket: "netflix-clone-e636e.appspot.com",
    messagingSenderId: "259262415179",
    appId: "1:259262415179:web:102c432439ce3fa286e8ce"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth } 
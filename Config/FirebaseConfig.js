import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAoI3aWakBtJSoRuuZiLzMv3U4P0NGMSBI",
    authDomain: "contact-app-react-native.firebaseapp.com",
    projectId: "contact-app-react-native",
    storageBucket: "contact-app-react-native.appspot.com",
    messagingSenderId: "11620018935",
    appId: "1:11620018935:web:07dcbba772ffc0ef12c1f2"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
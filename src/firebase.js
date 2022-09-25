import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyBRm6oKQ5h-1qkq5V_hPRSL4sKeUnVhK54",
    authDomain: "eng-lyrics.firebaseapp.com",
    databaseURL: "https://eng-lyrics.firebaseio.com",
    projectId: "eng-lyrics",
    storageBucket: "eng-lyrics.appspot.com",
    messagingSenderId: "778693532776",
    appId: "1:778693532776:web:f6239d48053f655314efdd",
    measurementId: "G-TT29ZVKY2E",
};

    const fireDb = firebase.initializeApp(firebaseConfig);
    const auth = getAuth(fireDb);
    export default fireDb.database().ref();
    export {auth};

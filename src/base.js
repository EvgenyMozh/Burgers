import Rebase  from "re-base";
import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDPgPVlJTFkgb0GUODKioQrDOT6tZhdhdQ",
    authDomain: "very-hot-burgers-b60f1.firebaseapp.com",
    databaseURL: "https://very-hot-burgers-b60f1-default-rtdb.europe-west1.firebasedatabase.app",
    
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
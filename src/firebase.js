import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6O_w9IYKDF0sYpiXSHhQYJCtBWecoPDE",
  authDomain: "linkedin-clone-a1fcf.firebaseapp.com",
  projectId: "linkedin-clone-a1fcf",
  storageBucket: "linkedin-clone-a1fcf.appspot.com",
  messagingSenderId: "873665681664",
  appId: "1:873665681664:web:6618a450d10885be93bbe5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };

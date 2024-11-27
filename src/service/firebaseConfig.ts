// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6SRsP3vsySfnTxn1Xw-RKoLpLKlsB5JU",
  authDomain: "maskots-04.firebaseapp.com",
  projectId: "maskots-04",
  storageBucket: "maskots-04.firebasestorage.app",
  messagingSenderId: "258642206595",
  appId: "1:258642206595:web:dad2d96b69748745ff60b6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword };

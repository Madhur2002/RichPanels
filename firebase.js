import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDR_A65wR4ZIMwjvAniViANI168lMF3Nco",
  authDomain: "richpanel-85180.firebaseapp.com",
  projectId: "richpanel-85180",
  storageBucket: "richpanel-85180.appspot.com",
  messagingSenderId: "771250549427",
  appId: "1:771250549427:web:23de7f4fe3fcd167e536c6",
  measurementId: "G-RHTM543KCJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

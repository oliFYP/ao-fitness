// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2DSneJm0E0v4lCSW_plMonG77C5g4qkI",
  authDomain: "ao-fitness.firebaseapp.com",
  projectId: "ao-fitness",
  storageBucket: "ao-fitness.appspot.com",
  messagingSenderId: "204621461509",
  appId: "1:204621461509:web:8355a03e72aa7015ff046c"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword };

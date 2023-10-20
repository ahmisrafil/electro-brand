// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaUqmZtegeTZxxvcdNjKkAqscSUIB5JWc",
  authDomain: "electro-brand-client.firebaseapp.com",
  projectId: "electro-brand-client",
  storageBucket: "electro-brand-client.appspot.com",
  messagingSenderId: "490805341357",
  appId: "1:490805341357:web:cafcc68d25fe1f4c75ea24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
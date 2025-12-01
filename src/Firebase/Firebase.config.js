// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAGcEHCl8vzs896UAIXDF5FPZ1ogdkgyg",
  authDomain: "online-toy-store-e7827.firebaseapp.com",
  projectId: "online-toy-store-e7827",
  storageBucket: "online-toy-store-e7827.firebasestorage.app",
  messagingSenderId: "670622710834",
  appId: "1:670622710834:web:e3e5722dc2ecc117cb102b"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);


export default app;
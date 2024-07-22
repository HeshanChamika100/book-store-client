// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm2ECn2WDkyLfG0BrRx8LhcJwgfTjwtlo",
  authDomain: "book-store-inventory-b7865.firebaseapp.com",
  projectId: "book-store-inventory-b7865",
  storageBucket: "book-store-inventory-b7865.appspot.com",
  messagingSenderId: "283170641934",
  appId: "1:283170641934:web:a087bd1f11b2ee3712045f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrUfXDTgL6gM1P3pmBoPbLOMoxMw0Gh14",
  authDomain: "netflixgpt-50658.firebaseapp.com",
  projectId: "netflixgpt-50658",
  storageBucket: "netflixgpt-50658.firebasestorage.app",
  messagingSenderId: "804603411267",
  appId: "1:804603411267:web:7b96aca93b70067c96cdf6",
  measurementId: "G-QMXMZNVGS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
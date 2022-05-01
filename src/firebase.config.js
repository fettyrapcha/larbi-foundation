// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_apiKey}`,
    authDomain: `${process.env.REACT_APP_authDomain}`,
    projectId: `${process.env.REACT_APP_projectId}`,
    storageBucket: `${process.env.REACT_APP_storageBucket}`,
    messagingSenderId: `${process.env.REACT_APP_messagingSenderId}`,
    appId: `${process.env.REACT_APP_appId}`,

    // apiKey: "AIzaSyAdUJAGTB6UXT7Tk9iYL1HigYFZTpGhw8c",
    // authDomain: "the-larbi-foundation-bdf08.firebaseapp.com",
    // projectId: "the-larbi-foundation-bdf08",
    // storageBucket: "the-larbi-foundation-bdf08.appspot.com",
    // messagingSenderId: "218071863442",
    // appId: "1:218071863442:web:a2ea4512ef2b20aa01d64b",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const storage = getStorage(app);


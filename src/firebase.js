import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAKf0xyJ3vPBRmWikNZ9QROr6uCV8zcYAw",
    authDomain: "larbi-foundation-databas-fb479.firebaseapp.com",
    projectId: "larbi-foundation-databas-fb479",
    storageBucket: "larbi-foundation-databas-fb479.appspot.com",
    messagingSenderId: "999649068876",
    appId: "1:999649068876:web:ccbbe544253d2b4a9b71e9"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBHqyThUQYbzwsDUXPw7HAs4YX-A21enKY",
    authDomain: "blz-one-9e383.firebaseapp.com",
    databaseURL: "https://blz-one-9e383-default-rtdb.firebaseio.com",
    projectId: "blz-one-9e383",
    storageBucket: "blz-one-9e383.appspot.com",
    messagingSenderId: "817319905653",
    appId: "1:817319905653:web:9acd39557b0af0568bab3c",
    measurementId: "G-Y0Q9ZYV12F"
};

export const app = initializeApp(firebaseConfig);
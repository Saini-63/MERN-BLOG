// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
//import { dotenv } from 'dotenv';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const api = process.env.REACT_APP_FIREBASE_API_KEY;
console.log(api);

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "mern-blog--sahand.firebaseapp.com",
    projectId: "mern-blog--sahand",
    storageBucket: "mern-blog--sahand.appspot.com",
    messagingSenderId: "47642577144",
    appId: "1:47642577144:web:3de87698875ec34f86130d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
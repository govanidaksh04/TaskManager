import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA2vMqItM3Q_1uK0uyiJCH17mbbuac6pJY",
    authDomain: "login-551c0.firebaseapp.com",
    projectId: "login-551c0",
    storageBucket: "login-551c0.appspot.com",
    messagingSenderId: "689865306259",
    appId: "1:689865306259:web:d4771190fbc19d4feb5d66",
    databaseURL: 'https://login-551c0-default-rtdb.firebaseio.com/'
};

export const app = initializeApp(firebaseConfig);
// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyDPp8I8Xp-qZg65GxEX8_ETxvrZCDG8454",
  authDomain: "bisnis-532f5.firebaseapp.com",
  projectId: "bisnis-532f5",
  storageBucket: "bisnis-532f5.appspot.com",
  messagingSenderId: "351800625123",
  appId: "1:351800625123:web:8abff984b15be7a00bc2d6",
  measurementId: "G-TJJBQ9TF7S"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const firestore = firebase.firestore();
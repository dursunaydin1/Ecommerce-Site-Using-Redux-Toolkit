import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  // Firebase yapılandırma bilgileri
  apiKey: "AIzaSyAPIejILp3FaIFVkRPUnyYJ4XUkToDtlfk",
  authDomain: "kisiler-e86fa.firebaseapp.com",
  projectId: "kisiler-e86fa",
  storageBucket: "kisiler-e86fa.appspot.com",
  messagingSenderId: "1096016038069",
  appId: "1:1096016038069:web:418ece8d152e37b5d2d6fc",
};

// Firebase'i başlat
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Firestore veritabanı referansı
const db = firebaseApp.firestore();

// Auth servisi referansı
const auth = firebase.auth();

// Google ile giriş sağlamak için GoogleAuthProvider referansı
const provider = new firebase.auth.GoogleAuthProvider();

export default db;

export { auth, provider };

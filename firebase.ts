import { initializeApp,getApps,getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC2_IG27cEUi1QBqXTbGpvtcEYTn4ylq8w",
  authDomain: "instagram-clone-1ed36.firebaseapp.com",
  projectId: "instagram-clone-1ed36",
  storageBucket: "instagram-clone-1ed36.appspot.com",
  messagingSenderId: "542878276261",
  appId: "1:542878276261:web:062c21b9e78ff8d51ecb4c",
  measurementId: "G-5L4M4ZCCG4"
};

const app = !getApps().length? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage};